// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

 function friend(friends){
    //your code here
      let friendList = [];
    for(let i = 0; i < friends.length; i++) {
      if (friends[i].length === 4) {
      friendList.push(friends[i])  
      }   
    }
      return friendList;
  }


// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.


  function arrayDiff(a, b) {

    return a.filter(value => !b.includes(value));
   
  }

// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base.
//  In this Kata, we will restrict ourselves to decimal (base 10).
// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. 
// This may be True and False in your language, e.g. PHP.

  function narcissistic(value) {
    // Code me to return true or false
      let digit = 0;
      let sumOfDigit = 0;
    if(value > 9 ) {
      digit = value.toString().split('');
      for(let i = 0; i < digit.length; i++) {
        sumOfDigit += Math.pow(Number(digit[i]), digit.length)
      }
      if(sumOfDigit === value) {
        return true
      } else {
        return false
        }
      
    } else {
      return true;
    }
  
  }