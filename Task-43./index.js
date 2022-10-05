
/* Creating an array of magicians and then printing them out. */
const magician = ["john", "joe", "jim"];
const show_magicians = (arr) => {
arr.map((idx) => console.log(idx));
};
console.log("Original Array");
show_magicians(magician);