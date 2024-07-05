const author = require("./models/authors");
const book = require("./models/books");
const loan = require("./models/loans");
const member = require("./models/members");
const reservation = require("./models/reservations");
async function assosiations(){
book.belongsTo(author,{foreignKey:'authorId'});
author.hasMany(book,{foreignKey:'authorId'});
// member.belongsToMany(book,{through:loan});
// Books and Loans
book.hasMany(loan,{foreignKey:'book_id'});
loan.belongsTo(book,{foreignKey:'book_id'});
// Loans and Members
member.hasMany(loan,{foreignKey:'member_id'})
loan.belongsTo(member,{foreignKey:'member_id'})
// Reservation and Members
member.hasMany(reservation,{foreignKey:'member_id'});
reservation.belongsTo(member,{foreignKey:'member_id'});
// Books and Reservation
book.hasMany(reservation,{foreignKey:'book_id'});
reservation.belongsTo(book,{foreignKey:'book_id'});
}
