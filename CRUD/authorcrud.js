const { native } = require("pg");
const author = require("../models/authors");

async function creation(data){
    console.log('---CREATION OPERATION-----');
    await author.bulkCreate(data);
    console.log('data is inserted into the author table');
}
const data=[{
    name:'Shailaja',
    birth_year:2003,
    nationality:'Pakisthan'
}]
creation(data);

async function updation(attribute, pastvalue,presentvalue){
    if(attribute==='name'){
        await author.update(

            {name:presentvalue},
            {
                where:{
                    name:pastvalue,
                }
            }
        )
    }
    if(attribute=== 'birth_year'){
        await author.update(

            {birth_year:presentvalue},
            {
                where:{
                    birth_year:pastvalue,
                }
            }
        )
    }
    if(attribute==='nationality'){
        await author.update(

            {nationality:presentvalue},
            {
                where:{
                    nationality:pastvalue,
                }
            }
        )
    }
    else{
        console.log('attribute is not matching');
    }
   
}
async function deletion(attribute, value){
 if(attribute==='name'){
    await  author.destroy({
        where:{
         name : value,
        }
       });
 }
 if(attribute==='birth_year'){
    await  author.destroy({
        where:{
         birth_year:value,
        }
       });
 }
 if(attribute==='nationality'){
    await  author.destroy({
        where:{
        nationality: value,
        }
       });
 }
}