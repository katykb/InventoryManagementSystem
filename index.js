const User=require('./User');
const Product = require('./Product');
const Category = require('./Category');

Product.belongsTo(Category);
Category.hasMany(Product);

module.exports={Category};
module.exports={Product}
module.exports={User};