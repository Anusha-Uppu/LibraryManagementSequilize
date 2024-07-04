const member = require("../models/members");

async function creation(data){
    console.log('----CREATION DATA OF MEMBERS-----');
    await member.bulkCreate(data);
    console.lof('data is inserted into the members table');
}
async function  reading(attribute,value){
    switch(attribute){
        case 'name':
            const l1=await member.findAll({
                where:{
                    name:value,
                }
            })
            console.table(l1.map(a =>a.toJSON()));
            break;
        case 'address' :
            const l2=await member.findAll({
                where:{
                    address:value,
                }
            })
            console.table(l2.map(a=>a.toJSON()));
            break;
        case 'phonbe_number':
            const l3=await member.findAll({
                where:{
                    phone_number:value,
                }
            })
            console.table(l3.map(a=>a.toJSON()));
            break;
        case 'email':
            const l4=await member.findAll({
               email : value,
            })
            console.table(l4.map(a=>a.toJSON()));
            break;
        default:
            console.log('---please provide correct values----');
    }
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