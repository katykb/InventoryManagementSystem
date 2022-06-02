const { User } = require('../models');

// Records: category_id: 1, CDs: category_id: 2, Tapes: category_id: 3
// Where / how should we identify the genre? Create another js file called Genre.js and assign it a name and number in the Product.js file???

const userData = [
    {
        username: 'ashley123',
        password: 'password'
    },
];

const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser