const {Sequelize, DataTypes}=require('sequelize');
const sequelize=new Sequelize('library','anusha','anu@123',{host:'localhost',dialect:'postgres'});
const author=require('./authors')
const book=sequelize.define(
    'book',
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        authorId:{
            type:DataTypes.INTEGER,
            references:{
                model:author,
                key:'id'
            }
        },
        genre:{
            type:DataTypes.STRING
        },
        isbn:{
            type:DataTypes.INTEGER,
            unique:true
        },
        publication_year:{
            type:DataTypes.INTEGER
        }
    }
)
module.exports=book;