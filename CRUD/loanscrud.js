const loan = require("../models/loans");


async function creation(data){
    await loan.bulkCreate(data);
}
async function updation(attribute,pastvalue,presentvalue){
    switch(attribute){
        case 'book_id':
            await loan.update(
                {book_id:presentvalue},
                {
                    where:{
                        book_id:pastvalue,
                    }
                }
            )
            break;
        case 'member_id':
            await loan.update(
                {member_id:presentvalue},
                {
                    where:{
                        member_id:pastvalue,
                    }
                }
            )
            break;
        case 'loan_date':
            await loan.update(
                {loan_date:presentvalue},
                {
                    where:{
                        loan_date:pastvalue,
                    }
                }
            )
            break;
        case 'due_date':
            await loan.update(
                {due_date:presentvalue},
                {
                    where:{
                        due_date:pastvalue,
                    }
                }
            )
            break;
        default:
            console.log('---please provide the correct values----');
    }
}
async function deletion(attribute,value){
    switch(attribute){
        case 'book_id':
            await loan.destroy({
                where:{
                    book_id:value,
                }
            })
            break;
        case 'member_id':
            await loan.destroy({
                where:{
                    member_id:value,
                }
            })
            break;
        case 'loan_date' :
            await loan.destroy({
                where:{
                    loan_date:value,
                }
            })
            break;
        case 'due_date':
            await loan.destroy({
                where:{
                    due_date:value,
                }
            })
            break;
        default:
            console.log('---please provide correct values---');
    }
}