// let exception= {
//   message: "ayo",
//   stack:"Mern"
// };
// let filename = "these nuts";
// let linenumber = "6"
// let errorMessage = `\
// \u2718 Test faillure at ${filename}: ${linenumber}:
// ${exception.message}
// Stack trace:
// ${exception.stack}`
// console.log(errorMessage);

// let o = {x:1, y:2};
// let arr = [];
// for (const [name, value] of Object.entries(o)) {
//   console.log(name, value);
//   arr.push(value)
// }
// let [x,y] = arr;
// let math = x+y;
// console.log(math)

// let o = {x:1, y:2};
// let {x,y} = o
// let maths = x+y;
// console.log(maths)
// //sorting algo of arrays brute force method//
// let a = [1,2,5,2,1,8];
// let b = []
// let len = a.length
// for (let i = 0; i < len; i++) {
//   if(b.indexOf(a[i]) === -1){
//     b.push(a[i]);
//   }
  
// }

// console.log(b)

// const dob = {"date":"1997-05-03T13:50:56.755Z"}
// function formatDate(date) {
//   //splits data into an array on the hyphen ex: [ '1997', '05', '03T13:50:56.755Z' ]//
//   const dateArray = date.split("-");
//   // gets the year from dateArray//
//   const year = dateArray[0];
//   // gets month from dateArray//
//   const month = dateArray[1];
//   // gets day and time and separates them on the 'T' ex: [ '03', '13:50:56.755Z' ]//
//   const dayArray = dateArray[2].split("T");
//   // gets the day from the dayArray//
//   const day = dayArray[0];
//   // combines month day and year elements on the hyphen//
//   const formattedDate = [month, day, year].join("-");
//   // return dateArray;
//   // return year;
//   // return month; 
//   // return day;
//   return formattedDate;
// }

// const Data = dob.date
// const dateform = new Date(Data);
// const year = dateform.getFullYear();
// let month = dateform.getMonth()+1
// let dt = dateform.getDate();
// let dft = (dt<10) ? "0" + dt : dt;
// let monthf = (month<10) ? "0" + month : month;
// if(dt < 10 ){ 
//   dt = "0" + dt;
// }

// if(month < 10 ){ 
//   month = "0" + month;
// }
// const formattedTime = (`${monthf}-${dft}-${year}`)
// console.log(formatDate(dob.date))
// console.log(formattedTime)
// var firstname = "joe"
// console.log(this.firstname)

// function Banana(color, length, diameter, isYummy){
//   this.color = color;
//   this.length = length;
//   this.diameter = diameter;
//   this.isYummy = isYummy
//   let rot = function() {
//       this.isYummy = false;
//   }
// };

// module.exports = Banana;

// const MONGO_URL = "mongodb+srv://admin:admin123@cluster0.ztj3m.mongodb.net/fsf_assessment?retryWrites=true&w=majority";


// const express = require('express')
// const router = require("express").Router();
// const app = express();
// const mongoose = require('mongoose');

// mongoose.Promise = global.Promise; 

// app.use(express.urlencoded({extended: true}));
// app.use(express.json());

// const booksSchema = new mongoose.Schema({name: String});
// const Book = mongoose.model('Book', booksSchema);


// // TODO: Setup your route
// router.GET("api/books")
// module.exports = {  // for testing purposes
//   open: () => {
//     mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});
//     const server = app.listen(3000);
//     return server;
//   },
//   close: (server) => {
//     server.close();
//     mongoose.disconnect();
//   }
// };
