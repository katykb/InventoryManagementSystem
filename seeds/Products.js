const { Product } = require('../models');

const productData = [
    {
        product_name: 'The Wall',
        product_artist: 'Pink Floyd',
        retail_price: 30.99,
        wholesale_price: 15.99,
        stock: 200,
        category_id: 1,
        media_type: 'Album',
        genre_type: 'Classic Rock'


    },
    {
        product_name: 'Dark Side of the Moon',
        product_artist: 'Pink Floyd',
        retail_price: 30.99,
        wholesale_price: 15.99,
        stock: 200,
        category_id: 1,
        media_type: 'CD',
        genre_type: 'Classic Rock'


    },
    {
        product_name: 'Appetite for Destruction',
        product_artist: 'Guns N Roses',
        retail_price: 23.99,
        wholesale_price: 12.99,
        stock: 250,
        category_id: 1,
        media_type: 'Album',
        genre_type: 'Classic Rock'
    },
    {
        product_name: 'The Chronic',
        product_artist: 'Dr. Dr',
        retail_price: 18.99,
        wholesale_price: 9.99,
        stock: 500,
        category_id: 2,
        media_type: 'CD',
        genre_type: 'Rap'
    }
]

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;