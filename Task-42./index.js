/**
 * The function takes an array of strings as an argument, and then loops through the array and prints
 * each string with the word "Great" in front of it
 * @param mag - the array of magicians
 */

const magician = ["john", "joe", "wick"];
const show_magicians = (arr) => {
arr.map((idx) => console.log(idx));
};

show_magicians(magician);
const make_great = (arr) => {
    let magician1 = [];
    for (let i = 0; i < arr.length; i++) {
    magician1.push("The Great " + arr[i]);
    }
    show_magicians(magician1);
};

make_great(magician);