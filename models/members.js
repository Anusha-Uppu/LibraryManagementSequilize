const {Sequelize, DataTypes}=require('sequelize');
const{connection}=require('../Connection/connection')
const sequelize=connection;


const member=sequelize.define(
    'member',
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        address:{
            type:DataTypes.STRING
        },
        phone_number:{
            type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING,
            unique:true
        }
    }
)
module.exports=member;