/* A for loop that is looping through the array and printing out the animals in the array. */


let animal = ["dog", "cat", "rabbit"];
let statement = {
dog: "A dog will make a great pet",
cat: "cat is funny",
rabbit: "rabbit is fluffy",
};
animal.map((idx) => console.log(`${statement[idx]}`));
