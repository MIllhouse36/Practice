const dob = {"date":"1997-05-03T13:50:56.755Z"}
const date = dob.date

function formatDate(date) {
  //splits data into an array on the hyphen ex: [ '1997', '05', '03T13:50:56.755Z' ]//
  const dateArray = date.split("-");
  // gets the year from dateArray//
  const year = dateArray[0];
  // gets month from dateArray//
  const month = dateArray[1];
  // gets day and time and separates them on the 'T' ex: [ '03', '13:50:56.755Z' ]//
  const dayArray = dateArray[2].split("T");
  // gets the day from the dayArray//
  const day = dayArray[0];
  // combines month day and year elements on the hyphen//
  const formattedDate = [month, day, year].join("-");
  // return dateArray;
  // return year;
  // return month; 
  // return day;
  return formattedDate;
}
console.log(formatDate(date))


const dateform1 = new Date(date);
const year1 = dateform1.getFullYear();
let month1 = dateform1.getMonth()+1
let dt1 = dateform1.getDate();
let dft1 = (dt1<10) ? "0" + dt1 : dt1;
let monthf1 = (month1<10) ? "0" + month1 : month1;
// if(dt < 10 ){ 
//   dt = "0" + dt;
// }

// if(month < 10 ){ 
//   month = "0" + month;
// }
const formattedTime1 = (`${monthf1}-${dft1}-${year1}`)
console.log(formattedTime1)


const dateform = new Date(date);
const year = dateform.getFullYear();
let month = (dateform.getMonth()+1 <10) ? `0${dateform.getMonth()+1}` : dateform.getMonth()+1;
let dt = (dateform.getDate() <10) ? `0${dateform.getDate()}`: dateform.getDate();
const formattedTime = (`${month}-${dt}-${year}`)

console.log(formattedTime)
