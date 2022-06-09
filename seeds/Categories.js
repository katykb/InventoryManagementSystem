const { Category } = require('../models');

// Records: category_id: 1, CDs: category_id: 2, Tapes: category_id: 3
// Where / how should we identify the genre? Create another js file called Genre.js and assign it a name and number in the Product.js file???

const categoryData = [
{

    name : 'Classic Rock'
}, 
{
    name : 'Pop'
}, 
{
    name  : 'Rock'
},
{
    name  : 'Country'
}, 
{
    name  : 'Rap'
}
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories