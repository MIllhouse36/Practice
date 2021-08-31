// const pikachu = { name: "Pikachu"};
// const stats = { hp:40, attack:60, defense:45};

// const lvl0 = {...pikachu, ...stats };
// const lvl1 = {...lvl0, hp: 45 };
// console.log(lvl0);
// console.log(lvl1);

// let pokemon = ['Arbox','Raichu','Sandshrew'];

// // pokemon = ['Bulbasaur','Metapod','Weedle',...pokemon];
// pokemon = [...pokemon,'Bulbasaur','Metapod','Weedle'];
// console.log(pokemon)
const orders = [200, 304, 122, 242, 500, 23, 36, 15];

// const total = 0;
// const withTax = [];
// const highValue = [];
// for (let i = 0; i < orders.length; i++) {
//   total += orders[i];
//   withTax.push(orders[i] * 1.1);
//   if(orders[i]>100){
//     highValue.push(orders[i])
//   }
// }
const total = orders.reduce((arr,cur)=> arr+cur);
const withTax = orders.map(v => (v * 1.1).toFixed(2));
const highValue = orders.filter(v=> v > 100);
console.log(total,withTax,highValue);

