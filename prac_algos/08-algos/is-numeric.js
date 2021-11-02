// const isNumeric = (str)=>{
//   for(let i=0; i<str.length; i++){
//     let char = str[i]

//   }
// }

var isNumeric = function (str) {
  var digits = {
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
  };

  var hasNum = false;
  var hasDecimal = false;

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    if (digits[char]) {
      hasNum = true;
      continue;
    }

    if (i === 0) {
      if (char === "-" || char === "+") {
        continue;
      }
    }

    if (char === ".") {
      if (hasDecimal === true) {
        return false;
      }

      hasDecimal = true;
      continue;
    }

    return false;
  }

  if (hasNum) {
    return true;
  }

  return false;
};

console.log(isNumeric("0123.00"));
console.log(isNumeric("+-13"));
