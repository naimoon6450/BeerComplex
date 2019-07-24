const Product = require('./server/db/models/Product');
const Supplier = require('./server/db/models/Supplier');
const Category = require('./server/db/models/Category');

const categories = [
{name: 'Barleywine'},
{name: 'Brown Ale'},
{name: 'Gose'},
{name: 'Hefeweizen'},
{name: 'IPA'},
{name: 'Lager'},
{name: 'Pale Ale'},
{name: 'Pilsner'},
{name: 'Porter'},
{name: 'Sour'},
{name: 'Stout'}
];


const suppliers = [
{name: 'Hill Farmstead'},
{name: 'Hudson Valley Brewery'},
{name: 'Other Half Brewing Co.'},
{name: 'Bissell Brothers Brewing Company'},
{name: 'The Alchemist'},
{name: 'Westbrook Brewing Co.'},
{name: 'Folksbier'},
{name: 'Crooked Stave Artisan Beer Project'},
{name: 'Kings County Brewers Collective'},
{name: 'Interboro Spirits & Ale'},
];

const products = [
{name: 'Edward', description: `Edward (1917-2002) is our grandfather; Hill Farmstead Brewery rests upon the land that was once home to him and his five children. In his honor, this American Pale Ale is dutifully crafted from American malted barley, a plethora of American hops, our ale yeast and water from Edward’s well. It is unfiltered and dry hopped. Aromatic and flowery, with impressions of citrus and pine, this is the ale that I dream to have shared with Edward. Pale and Caramel malt; Centennial, Chinook, Columbus, Simcoe, and Warrior hops; House Ale Yeast, and our Well Water.`, imageUrl: '/images/hill_farmstead_edward.jpg', price: 8.0},
{name: 'Susan', description: `Susan was our grandfather's sister - in her honor we offer this version of an American IPA.`, imageUrl: '/images/hill_farmstead_susan.jpg', price: 9.0},
];


async function seed() {

    console.log('DB seeded');

    const seededCategories = await categories.map(category => Category.create(category));
    const seededSuppliers = await suppliers.map(supplier => Supplier.create(supplier));
    const seededProducts = await products.map(product => Product.create(product));
}

    // await seededProducts[0].setCategory(seededCategories[6]);
    // await seededProducts[1].setCategory(seededCategories[4]);
    // await seededProducts[0].setSupplier(seededSuppliers[0]);
    // await seededProducts[1].setSupplier(seededSuppliers[0]);

    seed();
module.exports = {
    seed,
}

