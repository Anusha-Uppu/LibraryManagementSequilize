const {Sequelize, DataTypes}=require('sequelize');
const sequelize=new Sequelize('library','anusha','anu@123',{host:'localhost',dialect:'postgres'})

const author=require('./models/authors');
const Book=require('./models/books');
const member=require('./models/members');
const loan=require('./models/loans');
const reservation=require('./models/reservations');

async function main(){
    try{
        await sequelize.authenticate();
        console.log('Connection established successfully');
    }catch(error){
        console.log('Connection failed'+error);
    }
}
main();