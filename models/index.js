const User = require('./User');
const Accounts = require('./Accounts');
const Cards = require('./Cards');
const Bills = require('./Bills');
const Debt = require('./Debt');


User.hasMany(Accounts, {
    foreignkey: "user_id",
    onDelete: "CASCADE",
})

Accounts.belongsTo(User, {
    foreignKey: "user_id",
})
User.hasMany(Cards, {
    foreignkey: "user_id",
    onDelete: "CASCADE",
})
Cards.belongsTo(User, {
    foreignKey: "user_id",
})
User.hasMany(Bills, {
    foreignkey: "user_id",
    onDelete: "CASCADE",
})
Bills.belongsTo(User, {
    foreignKey: "user_id",
})
User.hasMany(Debt, {
    foreignkey: "user_id",
    onDelete: "CASCADE",
})
Debt.belongsTo(User, {
    foreignKey: "user_id",
})





module.exports = { User, Accounts, Cards, Bills, Debt };
