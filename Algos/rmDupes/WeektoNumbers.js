
  
  // // match number to day of the week
  //   var dayOfWeek = ["Monday","Tueday" ,"wednesday", "thursday", "friday", "Saturday", "sunday"];
  //   function daysOfWeek(day){
  //     return console.log(dayOfWeek[day-1]);
  //   }
  
  //   daysOfWeek(1);
  //   daysOfWeek(5);
  //   daysnOfWeek(8);

    var deduper = function(numArr){
      var newArr = [];
      for (let i = 0; i < numArr.length; i++) {
        if (!newArr.includes(numArr[i])){
        newArr.push(numArr[i]);
      }
    }
    return newArr;
  }

    console.log(deduper([1,2,2,3]));