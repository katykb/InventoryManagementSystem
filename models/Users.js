const {Model,Datatypes}=require('sequelize');
const { User } = require('.');
const sequelize=require('../config/connection');

class User extends Model{}

User.init(
    {
        category:{
            type:Datatypes.STRING,
            allowNull:false,
            primaryKey:true

        },
        products:{
            type:Datatypes.STRING,
            allowNull:false,

        },
        Users:{
            type:Datatypes.STRING,
            allowNull:false,

        },
        sales:{
            type:Datatypes.DECIMAL(10,2),
            allowNull:false

        },
        sequelize,
        timestamps:false,
        freezeTableName:true,
        underscored:true,
        moduleName: 'user',
    }
)
module.exports=Users;