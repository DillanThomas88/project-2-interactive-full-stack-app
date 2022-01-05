const sequelize = require('../config/connection');
const { User, Bills, Accounts, Cards, Debt } = require('../models');

const userData = require('./userData.json');
const billsData = require('./billsData.json');
const accountsData = require('./accountsData.json');
const cardsData = require('./cardsData.json');
const debtData = require('./debtData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true
  });
  
  try{
    await Bills.bulkCreate(billsData);
  }catch(err){
    console.log(err)
  }
  try{
    await Accounts.bulkCreate(accountsData);
  }catch(err){
    console.log(err)
  }
  try{
    await Cards.bulkCreate(cardsData);
  }catch(err){
    console.log(err)
  }
  try{
    await Debt.bulkCreate(debtData);
  }catch(err){
    console.log(err)
  }

  process.exit(0);
};

seedDatabase();
