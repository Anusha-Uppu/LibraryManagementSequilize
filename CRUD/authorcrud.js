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
// creation(data);
async function reading(attribute, value){
    switch(attribute){
        case 'name':
         const authors=await author.findAll({
                where:{
                    name:value,
                }
          });

          console.table(authors.map(a=>a.toJSON()));
          break;
        case 'birth_year':
          let authorslist=await author.findAll({
            where:{
                birth_year:value,
            }
          })
          console.table(authorslist.map(a=>a.toJSON()));
          break;
        case 'nationality' :
            let authorsl=await author.findAll({
                where:{
                    nationality:value,
                }
            })
            console.table(authorsl.map(a=>a.toJSON()));
        break;
        default:
            console.log('---please provide correct values----');
    }
 
}
reading('nationality','Uzbekistan');
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