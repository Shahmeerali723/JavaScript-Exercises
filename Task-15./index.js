/* The above code is removing the last element of the array and adding a new element in the array. */


let guest = ["Sulman", "Laraib", "Qalb-E-Momin"];
console.log(`${guest.slice(-1)} not be able to join the dinner`);
guest = guest.slice(0, -1);
guest.push("Shah Meer");
console.log(`Dear ${guest.slice(-1)}, have for you dinner with me.`);