function analyzeArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // don't forget to add the base
  }

  const obj = {

    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
    average: sum / arr.length,

  };
  return obj;
}
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
function reverseString(str) {
  return str.split('').reverse().join('');
}
function caesarCipher(str, num) {
  const uppercaseMax = 90;
  const uppercaseMin = 65;
  const lowercaseMax = 122;
  const lowercaseMin = 97;

  const res = str.split('').map((x) => x.charCodeAt());

  for (let i = 0; i < res.length; i++) {
    if (res[i] >= uppercaseMax && res[i] <= uppercaseMin) {
      if (res[i] + num > uppercaseMax) {
        res[i] = uppercaseMin + num - (uppercaseMax - res[i]) - 1;
      } else {
        res[i] += num;
      }
    } else if (res[i] >= lowercaseMin && res[i] <= lowercaseMax) {
      if (res[i] + num > lowercaseMax) {
        res[i] = (lowercaseMin + num) - (uppercaseMin - res[i]) - 1;
      } else {
        res[i] += num;
      }
    }
  }

  return String.fromCharCode(...res);
}
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
const calculator = {
  add, subtract, multiply, divide,
};

export {
  capitalize, reverseString, calculator, caesarCipher, analyzeArray,
};
