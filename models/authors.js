// const { table } = require('console');
// const { hostname } = require('os');
const { Sequelize, DataTypes } = require('sequelize');
// require("dotenv").config();
const{connection}=require('../Connection/connection')
 

const sequilize=connection;

const author=sequilize.define(
    'author',
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
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