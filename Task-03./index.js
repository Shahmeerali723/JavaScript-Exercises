/**
 * Split the string into an array of words, map over the array, capitalize the first letter of each
 * word, join the array back into a string, and return the result
 * @param str - The string to be converted to title case.
 */

let name = "Shah Meer!";
console.log(name.toUpperCase());
console.log(name.toLowerCase());


function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }
  titleCase("My name is Shah Meer, I'm AI Developer currently i'm studying in Web 3.O or Metaverse");
console.log(titleCase("My name is Shah Meer, I'm AI Developer currently i'm studying in Web 3.O or Metaverse"));

