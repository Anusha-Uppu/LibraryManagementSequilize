const {Sequelize, DataTypes}=require('sequelize');
const book = require('./books');
const member = require('./members');

const sequileze=new Sequelize('library','anusha','anu@123',{host:'localhost',dialect:'postgres'});

const reservation=sequileze.define(
    'reservation',
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
        reservation_date:{
            type:DataTypes.DATE,
            allowNull:false
        }
    }
)
module.exports=reservation;