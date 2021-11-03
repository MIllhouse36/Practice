// Write code to create a function that accepts a string and determines if the string is a valid number. You may not use any regex, built-in methods type conversion to accomplish this.

const isNumeric = (str) => {
  const digits = {
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

  let hasNum = false;
  let hasDec = false;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (digits[char]) {
      hasNum = true;
      continue;
    }

    if (i === 0) {
      if (char === "+" || char === "-") {
        continue;
      }
    }

    if (char === ".") {
      if (hasDec === true) {
        return false;
      }
      hasDec = true;
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
console.log(isNumeric("+-a13"));
