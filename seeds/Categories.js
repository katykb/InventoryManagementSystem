const { Category } = require('../models');

// Records: category_id: 1, CDs: category_id: 2, Tapes: category_id: 3
// Where / how should we identify the genre? Create another js file called Genre.js and assign it a name and number in the Product.js file???

const categoryData = [
{

    genre_type : 'Classic Rock'
}, 
{
    genre_type : 'Pop'
}, 
{
    genre_type : 'Rock'
},
{
    genre_type : 'Country'
}, 
{
    genre_type : 'Rap'
}
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories