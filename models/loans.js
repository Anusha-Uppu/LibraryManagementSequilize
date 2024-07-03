const {Sequelize, DataTypes}=require('sequelize');
const sequelize=new Sequelize('library','anusha','anu@123',{host:'localhost',dialect:'postgres'})
const book = require('./books');
const member = require('./members');
const loan=sequelize.define(
    'loan',
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        book_id:{
            type:DataTypes.INTEGER,
            references:{
                model:book,
                key:'id'
            }
        },
        member_id:{
            type:DataTypes.INTEGER,
            references:{
                model:member,
                key:'id'
            }
        },
        loan_date:{
            type:DataTypes.DATE,
            allowNull:false
        },
        due_date:{
            type:DataTypes.DATE,
            allowNull:false
        }
    }
)
module.exports=loan;