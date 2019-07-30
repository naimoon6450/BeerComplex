# Component Tests

## MainNavbar.spec.js

- Checks if there are login/signup buttons
  - Checks if they navigate to correct route
- Clicking on logo navigates to home page
- Check if there's a home button
- Checks if there's a product button
  - Check if it navigates to correct route
- Cart image with count of items in cart
  - Ensure the count is accurate with items in cart
- Check for an About button
- Check for a Team button
- Will have user profile button if logged in

---

## AllProduct.spec.js

- Should have some type of header with intro to page before listing out all the products
- Renders list of products in db, and not hardcoded
- Specifies a key prop to each product (to equal the prodId)
- Should have an add product to cart button
  - Modal pops out when add is clicked that shows the product details
- Ensure addition of product lands in cart
- Filter features for Tier 3

---

## SingleProduct.spec.js

- Displays the items details (h1 for title, p for details etc.)
  - Data pulled from store and not hardcoded
- Modal that's displayed when a product is clicked in allProd
- Checks if basic information coming from db and not hardcoded
- Has an add to cart button here

## Cart.spec.js

- Displays the items in the cart
- Allows quantity to be changed from this page
- Allows deleting product from cart
- Displays helpful message if there's nothing in cart

## LoginLogoutSignUp.spec.js

### Login

    - Login page contains relevant fields (ie. username, email, etc.)
    - Redirects to home page with rendering of user profile option in Navbar

### Logout

    - Logging out should take you to home page with no user button in Navbar

### SignUp

    - Contains relevant fields for signup (ie. address, name, etc)
    - Once submitted, db should be updated with relevant user
