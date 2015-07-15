// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(a, b){
    if (a > b){

    }return a;

    else{
      return b;
    };
}''

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c){
  if(a > b && a > c);{
    return a;
  };
    else if (b > a && b > c);{
      return b;
    };
    else {
      return c;
    };
};

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
  if (char === "a" || "e" || "i" || "o" || "u" || "y"){
    return true;
  };
  else {
    return false;
  };
};

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
  var newString = "";
  for(var i = 0;i < phrase.length; i++){
  if(!isVowe(phrase[i]) && phrase[i] !=== " "){
  newString + = phrase[i] + "o" + phrase[i];
  }
  else {
    newString += phrase[i];
  }
} return newString;
};

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum([2,4,6,8]){
  return 2 + 4 + 6 + 8;

};

function multiply([2,3,4,5]){
  return 2 * 3 * 4 * 5;

}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(phrase){
  var str = "";
  for (var i= phrase.length -1;
    i >= 0; i--){
      str += phrase[i];
    };
    return;
  }

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord([dog, cat, hippo]){
  if ([0].length > [1].length && [0].length > [2].length){
    return [0];
  } else if ([1].length > [2].length && [1] > [0].length) {
    return[1];
    } else if ([2].length > [0].length && [2].length > [1].length) {
    return [2];
    };
};

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords([steve, pirate, dodgeball. spaceship, pluto] [i]){
    if [steve, pirate, dodgeball. spaceship, pluto] > [i];
    return [steve, pirate, dodgeball. spaceship, pluto];
  };
  else {
    return [i];
  };
};

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq("abbabcbdbabdbdbabababcbcbab"){

};
