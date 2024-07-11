const { Sequelize, Op } = require("sequelize");

const {connection}=require('../Connection/connection');
const reservation = require("../models/reservations");
const loan = require("../models/loans");
const sequelize=connection;


async function loans_transaction(book_id,member_id){
    try{
        const result=await sequelize.transaction( async ()=>{
            const reservationsl=await reservation.findAll({
                where:{
                    [Op.and]:[{member_id:member_id},{book_id:book_id}]
                }
            });
            // console.log('result'+reservationsl);
            console.table(reservationsl.map(a=>a.toJSON()));
            if(reservationsl.length>0){
                console.log('----CHECKING IF IS WORKING------');
                const today=new Date();
                const aa=[{
                    book_id:book_id,
                    member_id:member_id,
                    loan_date:today,
                    due_date:(today.getDate()+5)
                }]
                await loan.bulkCreate(aa);
                console.log('loan is created for the user');
                await reservation.destroy({
                    where:{
                        [Op.and]:[{book_id:book_id},{member_id:member_id}]
                    }
                })
            }
         })
     }
     catch(err){
         console.log('Transaction failed');
     }
}
loans_transaction(2,1);