const reservation = require("../models/reservations");

async function creation(data){
    await reservation.bulkCreate(data);
    console.log('---data is inserted---');
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