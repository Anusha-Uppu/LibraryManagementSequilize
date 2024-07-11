const member = require("../models/members");

//get the members who's name starts with A
async function abc(){
    
    const value=await member.findAll({
        where:{
            name:{
                [Op.startsWith]:'A'
            }
        }
    })
    console.table(value.map(a=>a.toJSON()));
}