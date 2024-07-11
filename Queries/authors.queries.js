const { Op, Sequelize, where } = require("sequelize")
const author = require("../models/authors");
const member = require("../models/members");

//get authors who's id is below 5
// const result=async()=>{
    
//    // return authors;
// }
// console.log(result);
async function fun(){
    const authors=await author.findAll({limit:5 })
    console.log(authors);
    console.table(authors.map(a=>a.toJSON()));
}
// fun();


// console.table(result);
abc();
async function fun2(){
    const authors=await author.findAll(
       {
        where:{
            id:{
                [Op.lt]:6
            }
        }
       }
    )
    // console.log(authors);
    console.table(authors.map(a=>a.toJSON()));
}
fun2();

//select authors with id 2 and 3
const authorresult3=async()=>{
    const result=await author.findAll({
        where:{
            [Op.or]:[{name:'Anusha'} , {name:'Anoosha'}],
        }
    })
    console.table(result.map(a=>a.toJSON()));
    return result;
}
authorresult3();
