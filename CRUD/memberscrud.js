const member = require("../models/members");

async function creation(data){
    console.log('----CREATION DATA OF MEMBERS-----');
    await member.bulkCreate(data);
    console.lof('data is inserted into the members table');
}

async function updation(attribute, pastvalue,presentvalue){
 switch(attribute){
    case 'name':
        await member.update(
            {name:presentvalue},
            {
                where:{
                    name:pastvalue,
                }
            }
        )
        break;
    case 'address' :
        await member.update(
            {address:presentvalue},
            {
                where:{
                    address:pastvalue,
                }
            }
        )
        break;
    case 'phone_number' :
        await member.update(
            {phone_number: presentvalue},
            {
                where:{
                    phone_number:pastvalue,
                }
            }
        )
        break;
    case 'email':
        await member.update(
            {email:presentvalue},
            {
                where:{
                    email:pastvalue,
                }
            }
        )
        break;
    default:
        console.log('---attribute is not matching---');
 }
}

async function deletion(attribute,value){
    switch(attribute){
        case 'name':
            await member.destroy({
                where:{
                    name:value,
                }
            })
            break;
        case 'address' :
            await member.destroy({
                where:{
                    address:value,
                }
            })
            break;
        case 'phone_number' :
            await member.destroy({
                where:{
                    phone_number:value,
                }
            })
            break;
        case 'email' :
            await member.destroy({
                where:{
                    email:value,
                }
            })
            break;
        default:
            console.log('----attribute is not matching----');
    }
}