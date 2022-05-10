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