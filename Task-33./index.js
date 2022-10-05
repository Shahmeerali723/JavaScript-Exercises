/* Printing out the ordinal numbers 1st, 2nd, 3rd, 4th, 5th, 6th, 7th, 8th, 9th, 10th, 11th, 12th,
13th, 14th, 15th. */
let ordinal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let i = 0; i < ordinal.length; i++) {
if (ordinal[i] === 1) console.log(ordinal[i] + "st");
else if (ordinal[i] === 2) console.log(ordinal[i] + "nd");
else console.log(ordinal[i] + "th");
}
