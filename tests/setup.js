const db = require('../server/db/connection');
beforeEach(() => db.sync({ force: true }));
afterEach(() => db.sync({ force: true }));
afterAll(() => db.close());
