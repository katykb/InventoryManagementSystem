const seedCategories = require('./Categories');
const seedProducts = require('./Products');
const seedSales = require('./Sales');
const seedUser = require('./Users');


const sequelize = require('../config/connection');
const seedGenre = require('./Genre');
const seedMedia = require('./Media');

const seedDatabase = async() => {
    await sequelize.sync ({ force : true});

    await seedUser();
    
    await seedCategories();

    await seedProducts();

    //await seedSales();

    
    process.exit(0);
};

// Invoking function
seedDatabase();