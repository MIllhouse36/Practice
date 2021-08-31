const companies = [
    {name: "company zero", category: "cheese", start: 1983, end: 2020 },  
    {name: "company one", category: "finance", start: 1987, end: 2009 },
    {name: "company two", category: "sex", start: 1988, end: 2010 },
    {name: "company three", category: "drugs", start: 1989, end: 2011 },
    {name: "company four", category: "rock and roll", start: 1990, end: 2012 },
    {name: "company five", category: "finance", start: 1991, end: 2013 },
    {name: "company six", category: "cheese", start: 1992, end: 2014 },
    {name: "company seven", category: "rock and roll", start: 1982, end: 2019 },    
];

const ages = [33, 44, 45, 48, 67, 87];


// s


// const canDrink = ages.filter(function(age){
//     if(age >= 21 ){
//         return true ;
//     }
// });

// console.log(canDrink)

var cheeseCompanies = companies.filter(function(thingies){ 
    if (thingies.category == "cheese"){
        return thingies;
    }
});

console.log (cheeseCompanies[0].name)

var cheesStr = cheeseCompanies.forEach(function(jawn){
 console.log(jawn.name);
})
 console.log(cheesStr)
var cheesArry = cheeseCompanies.map(function(jawn){
    return jawn.name + ", closed " + jawn.end;
})
console.log(cheesArry)

const rockCompanies = companies.filter((company) => company.category === "rock and roll");
rockCompanies.forEach(function (property){
    console.log(property.name + " loves to rock and roll")
})
console.log(rockCompanies[0].name, rockCompanies[1].name);

const eightiesCompany = companies.filter (company => (company.start >= 1980 && company.start < 1990));
console.log(eightiesCompany)

eightiesCompany.forEach(function(jawn){
var totalYears = (jawn.end - jawn.start)
    if (totalYears > 21) {
        console.log(jawn.name +" "+ totalYears);
        
    }
})

const comNames = companies.map(function (bidnesses){
    return bidnesses.name + " : " + bidnesses.start;
});
console.log(comNames)
