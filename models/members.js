const {Sequelize, DataTypes}=require('sequelize');
const sequelize=new Sequelize('library','anusha','anu@123',{host:'localhost',dialect:'postgres'});

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