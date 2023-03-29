// Divisible by 3 => fizz  /3
// Divisible by 5 => Buzz  //
// Disivible by both 3 and 5 => Fizzbuzz
// Not Divisible by 3 or 5 => input 
// Not a number => 'Not a number'
//it all depends on your input your input come from inside program's itself 
const output = fizzBuzz(true);
console.log(output);

  
function fizzBuzz(input) {
    if (typeof input !== 'number')
      return NaN;

    if((input % 3 === 0 ) && (input % 5 === 0))
        return 'FizzBuzz';
      
    if (input % 3 === 0 )
      return 'Fizz';

    if (input % 5 === 0 )
      return 'Buzz';

    
    return input;
}

