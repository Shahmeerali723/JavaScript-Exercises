/*
Add one new guest to the beginning of your array.
Add one new guest to the middle of your array.
Use append() to add one new guest to the end of your list.
Print a new set of invitation messages, one for each person in your list.
*/

/* A JavaScript code. */

let guests = ["Shah Meer", "Laraib", "Sulman"];
guests.push("Qalb-E-Momin");
guests.push("Ibdar");
guests.push("Wajahat");
guests.map((name) =>
console.log(
    `Dear ${name}, I would to inform you that we have a bigger dinner table now.`
)
);

guests.unshift("Nasir");
guests.push("Ali");
guests.splice(3, 0, "Faiz");

guests.map((name) =>
console.log(`Dear ${name}, I would love to have you on dinner with me.`)
);

let count = guests.length;



