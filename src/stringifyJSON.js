// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //initialize count for obj
  var countObj = {}
  // initialize the count of elements of array
  var countArr = []
  // edge case
  if (typeof obj === "number" || typeof obj === "boolean" || typeof obj === null) {
    return " " + obj;
  } else if (typeof obj === String) {
    return '"' + obj + '"';
  }
  // your code goes here
  else if (Array.isArray(obj)) {
    //check for empty array
    if (obj[0] === undefined)
      return '[]';
    else {
      obj.forEach(function(value) {
        countArr.push(stringifyJSON(value));
      });
      // turn into a string
      return '[' + countArr + ']';
    }
  }
  // CHECK if there is obj in obj
  else if (obj instanceof === "object") {
    // if so iterate through it
    if (obj[0] === undefined) {
      return "{}"
    } else if (typeof obj === "number" || typeof obj === || typeof obj === Object) {
      obj.forEach(function(key) {
          countObj.push(stringifyJSON(key))
        }
        //then make it to count
      });
    return '{' + key + '}'
  }
};
