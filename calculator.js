function calculate(expression) {

  let num1
  let num2
  let operator
  


  
  let answer;
  const tokens = expression.split(' ')  // ["2", "+", "3"]
   operater = tokens[1]
   num1 = tokens[0]
   num2 = tokens[2] // tells the calculater what the things should be 

 num1 = Number(num1);
 num2 = Number(num2)


// if (tokens.length === 3){
  
// } 



if (operator === '+'){
  answer = add(num1,num2)
} 

else if (operator === '-'){
answer=sub(num1,num2)
}


else if (operator === '*'){
  answer=mul(num1,num2)
}

else if (operator === '/'){
  answer=div(num1,num2)
}

else if (operator === '^'){
  answer=pow(num1,num2)
}

else if (operator === '%'){
  answer=mod(num1,num2)
}

else if (operator === 'sqrt'){
  answer=sqrt(num1)
  
}
return answer


// if (Number.isNaN(num1) || Number.isNaN(num2)) {
//   alert('Not a number! Try again.');
//   return;
// }

}

function add (num1, num2){
  return num1 + num2;
}
// const sum = add()
// console.log(sum);


function sub (num1, num2){
  return num1 - num2;
}
// const subTotal = sub(8,5)
// console.log(subTotal)

function mul (num1, num2){
  return num1 * num2;
}
// const mulTotal = mul(5,4)
// console.log(mulTotal)


function div (num1, num2){
  return num1 / num2;
}
// const divTotal = div(18,2)
// console.log(divTotal)


function pow (num1, num2){
  return num1 ** num2;
}
// const powTotal = pow(7,2)
// console.log(powTotal)

function mod (num1, num2){
  return num1 % num2;
}
// const modTotal = mod(11,5)
// console.log(modTotal)


function sqrt (num1){
  return Math.sqrt(num1);
}
// const sqrtTotal = sqrt()
// console.log(sqrtTotal)

// console.log(calculate[5 * 4])








/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});
