const {Sequelize, DataTypes}=require('sequelize');
// const sequelize=new Sequelize('library','anusha','anu@123',{host:'localhost',dialect:'postgres'})
const {connection}=require('./Connection/connection')
const sequelize=connection;
const express=require('express');

const app=express();


const book=require('./models/books');
const author=require('./models/authors');
const member=require('./models/members');
const loan=require('./models/loans');
const reservation=require('./models/reservations');

const {authorslist}=require('./insert');
const {books}=require('./insert');
const {memberslist}=require('./insert')

const authorRoutes=require('./routes/authors.routes');
const bodyParser = require('body-parser');
const bookRoutes=require('./routes/books.routes')
const memberRoutes=require('./routes/members.routes')
const loanRoutes=require('./routes/loans.routes');
const reservationRoutes=require('./routes/reservation.routes')

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
app.use('/api/ping', ((req, res) => {  
    res.json({ message: 'pong' });
}));
app.use(bodyParser.json());
app.use('/api/authors',authorRoutes);
app.use('/api/books',bookRoutes);
app.use('/api/members',memberRoutes);
app.use('/api/loans',loanRoutes);
app.use('/api/reservations',reservationRoutes)
app.listen(3000,()=>console.log('Server is running in the port no 3000'));