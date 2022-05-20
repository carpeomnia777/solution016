//write a function that takes a string and reverses it

function digitize(num) {
    let stringNum = String(num); //converts the numbers to a string because split doesnt work on a number
    let revN = stringNum.split("");//splits the individual numbers up
    let finalNum = revN.reverse().map(Number); //reverse the order then creates an array based on the results then converts back to numbers
    return finalNum;
  }

