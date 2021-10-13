const fizzBuzz = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 !== 0) {
      console.log(`Fizz`);
    } else if (arr[i] % 5 === 0 && arr[i] % 3 !== 0) {
      console.log(`Buzz`);
    } else if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      console.log(`Fizz Buzz`);
    } else console.log(arr[i]);
  }
};

const fizzBuzz2 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let currentNumber = arr[i];
    if (currentNumber % 15 === 0) {
      console.log(`Fizz Buzz`);
    } else if (currentNumber % 3 === 0) {
      console.log(`Fizz`);
    } else if (currentNumber % 5 === 0) {
      console.log(`Buzz`);
    } else {
      console.log(currentNumber);
    }
  }
};
fizzBuzz([1, 3, 5, 15]);
fizzBuzz2([1, 3, 5, 15, 45]);
