const expenses = [960, 22, 18, 118, 373, 7, 11, 40, 25, 30];
const expensesReducer = (accumlator, currentvalue) => accumlator + currentvalue;
const daysMissed = 4;
const currentbank = 1268.99;
const typicalFullCheck = 1162.53;
const eachDay = 116.35;
const totalMoneyLoss = eachDay * daysMissed;
const taxPerDay = 43.65;
const nextPaycheckReducer = (accumlator, currentvalue) => accumlator - currentvalue;
const nextPaycheck = nextPaycheckReducer(typicalFullCheck, totalMoneyLoss)

const total = expenses.reduce(expensesReducer);
console.log(`Total expense: $${total} per month`);
console.log(`Total Money loss this payperiod: $${totalMoneyLoss}`);
console.log(`Your next paycheck will be: $${nextPaycheck}`);