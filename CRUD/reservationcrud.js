const reservation = require("../models/reservations");

async function creation(data){
    await reservation.bulkCreate(data);
    console.log('---data is inserted---');
}
async function  reading(attribute,value){
    switch(attribute){
        case 'book_id':
            const l1=await reservation.findAll({
                where:{
                    book_id:value,
                }
            })
            console.table(l1.map(a =>a.toJSON()));
            break;
        case 'member_id' :
            const l2=await reservation.findAll({
                where:{
                    member_id:value,
                }
            })
            console.table(l2.map(a=>a.toJSON()));
            break;
        case 'reservation_date':
            const l3=await reservation.findAll({
                where:{
                    reservation_date:value,
                }
            })
            console.table(l3.map(a=>a.toJSON()));
            break;
        default:
            console.log('---please provide correct values----');
    }
}
async function updation(attribute,pastvalue,presentvalue){
    switch(attribute){
        case 'book_id':
            await reservation.update(
                {book_id:presentvalue},
                {
                    where:{
                        book_id:pastvalue,
                    }
                }
            )
            break;
        case 'member_id':
            await reservation.update(
                {member_id:presentvalue},
                {
                    where:{
                        member_id:pastvalue,
                    }
                }
            )
            break;
        case 'reservation_date':
            await reservation.update(
                {reservation_date:presentvalue},
                {
                    where:{
                        reservation_date:pastvalue,
                    }
                }
            )
            break;
        default:
            console.log('---please provide correct values---');
    }
}

async function deletion(attribute,value){
    switch(attribute){
        case 'book_id':
            await reservation.destroy({
                where:{
                    book_id:value,
                }
            })
            break;
        case 'member_id':
            await reservation.destroy({
                where:{
                    member_id:value,
                }
            })
            break;
        case 'reservation_date':
            await reservation.destroy({
                where:{
                    reservation_date:value,
                }
            })
            break;
        default:
            console.log('---please provide correct values---');
    }
}