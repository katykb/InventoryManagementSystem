const { Product } = require('../models');

const productData = [
    {
        product_name : 'Pink Floyd: The Wall',
        retail_price : 22.99,
        wholesale_price : 11.99,
        stock : 300,
        category_id : 1,
        
    }, 
    {
        product_name : 'Pink Floyd: Dark Side of the Moon',
        retail_price : 30.99,
        wholesale_price : 15.99,
        stock : 200,
        category_id : 1,
        

    }, 
    {
        product_name : 'Guns N Roses: Appetite for Destruction',
        retail_price : 23.99,
        wholesale_price : 12.99,
        stock : 250,
        category_id : 1,
        
    },
    {
        product_name : 'Dr. Dre: The Chronic',
        retail_price : 18.99,
        wholesale_price : 9.99,
        stock : 500,
        category_id : 2,
        
    }
]

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;