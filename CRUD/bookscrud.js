const book = require("../models/books");

async function creation(data){
    console.log('-----CREATION FUNCTION OF BOOKS-----');
    await book.bulkCreate(data);
    console.log('data is inserted into the books table');
}
async function updation(attribute,pastvalue,presentvalue){
    if(attribute==='title'){
     
        await book.update(

            {title:presentvalue},
            {
                where:{
                    title:pastvalue,
                }
            }
        )
        console.log('---title of the book is changed----');
    }
    if(attribute==='athorId'){
        await book.update(

            {authorId:presentvalue},
            {
                where:{
                    authorId :pastvalue,
                }
            }
        )
    }
    if(attribute==='genre'){
        await book.update(

            {genre:presentvalue},
            {
                where:{
                    genre:pastvalue,
                }
            }
        )
    }
    if(attribute==='isbn'){
        await book.update(

            {isbn:presentvalue},
            {
                where:{
                    isbn:pastvalue,
                }
            }
        )
    }
    if(attribute==='publication_year'){
        await book.update(
            {publication_year:presentvalue},
            {
                where:{
                    publication_year : pastvalue,
                }
            }
        )
    }
}

async function deletion(attribute, value){
    switch(attribute){
        case 'title':
             await book.destroy({
                where:{
                    title:value,
                }
             })
             break;
        case 'authorId' :
            await book.destroy({
                where: {
                    authorId:value
                }
            })
            break;
        case 'genre' :
            await book.destroy({
                where:{
                    genre:value,
                }
            })
            break;
        case 'isbn':
            await book.destroy({
                where:{
                    isbn: value,
                }
            })
            break;
        case 'publication_year' :
            await book.destroy({
                where:{
                    publication_year:value,
                }
            })
    }
}
const data=[
    {
        title:'happy',
        authorId:3,
        genre:'Horror',
        isbn:1342,
        publication_year:2005
    }
]
// creation(data);
// updation('title','happy','Happy Devil');
deletion('title','Happy Devil');