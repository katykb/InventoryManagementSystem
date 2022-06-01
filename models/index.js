const User=require('./User');
const Product = require('./Product');
const Category = require('./Category');

Product.belongsTo(Category,{foreignKey:"category_id"});
Category.hasMany(Product ,{foreignKey:'category_id'});

module.exports={Category, Product, User};
