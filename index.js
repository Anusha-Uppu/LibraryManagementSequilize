const {Sequelize, DataTypes}=require('sequelize');
// const sequelize=new Sequelize('library','anusha','anu@123',{host:'localhost',dialect:'postgres'})
const {connection}=require('./Connection/connection')
const sequelize=connection;

const book=require('./models/books');
const author=require('./models/authors');
const member=require('./models/members');
const loan=require('./models/loans');
const reservation=require('./models/reservations');

const {authorslist}=require('./insert');
const {books}=require('./insert');
const {memberslist}=require('./insert')


async function main(){
    try{
        await sequelize.authenticate();
        console.log('Connection established successfully');
    }catch(error){
        console.log('Connection failed'+error);
    }
    await author.sync({force:true});
    console.log('author table is created');
    await author.bulkCreate(authorslist);
    console.log('Data inserted into the authors');
    await book.sync({force:true});
    console.log('Book table is created');
    await book.bulkCreate(books);
    console.log('Data inserted into the books');
    await member.sync({force:true});
    console.log('Members table is created');
    await member.bulkCreate(memberslist);
    console.log('Data inserted into the memebers table');
    await loan.sync({force:true});
    console.log('Loan table is created');
    await reservation.sync({force:true});
    console.log('reservation table is created');
}
main();