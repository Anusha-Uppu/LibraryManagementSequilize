// const { table } = require('console');
// const { hostname } = require('os');
const { Sequelize, DataTypes } = require('sequelize');


const sequilize=new Sequelize('library','anusha','anu@123',{hostname:'localhost',dialect:'postgres'});

const author=sequilize.define(
    'author',
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true
        },
        name:{
            type:DataTypes.STRING
        },
        birth_year:{
            type:DataTypes.INTEGER
        },
        nationality:{
            type:DataTypes.STRING
        }
    }
)
module.exports=author;