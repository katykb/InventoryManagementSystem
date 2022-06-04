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

        media_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },

        product_artist: {
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
        // this is the genre
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

module.exports = Product