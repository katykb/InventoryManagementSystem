const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Product extends Model { }

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
   

        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        retail_price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        wholesale_price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        //added media type here
        media_type: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     isNumeric: true
            // }
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "product",

    }
);

module.exports =  Product