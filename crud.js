const { where } = require("sequelize");
const author = require("./models/authors");
const loan = require("./models/loans");

async function creation(tablename,records){
    console.log('----Creation-----')
    await tablename.bulkCreate(records);
}

async function updation(tablename,pastvalue, presentvalue){
    console.log('----UPDATION-----');
    await tablename.update(
        {name:presentvalue},
        {
            where:{
                name:pastvalue,
            }
        }
    )
    console.log(tablename+' updated');
}
// async function deletion(tablename, attribute, value){
  
//    await  tablename.destroy({
//     where:{
//        attribute : value
//     }
//    });
// }

async function deletion(tablename, attribute, value){
   let val1=attribute;

    await  tablename.destroy({
     where:{
      val1 : value,
     }
    });
 }
const data1=[{
    name:'Mamatha',
    birth_year:2003,
    nationality:'Korea'
}]
const value2={name:'Mamatha Niyal'};
// creation(author,data1);
// updation(author,'Mamatha','Mamatha niyal');
deletion(author,'name','Mamatha Niyal')