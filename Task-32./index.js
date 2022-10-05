/* The above code is checking if the new_users array has any of the same values as the current_users
array. If it does, it will print out the username and a message. If it doesn't, it will print out a
message saying the username is available. */
let current_users = ["user1", "user2", "user3", "user4", "admin"];
let new_users = ["user11", "user22", "user3", "user44", "admin"];

new_users.map((idx) => {
if (current_users.includes(idx.toLowerCase())) {
    console.log(idx, " you will need to enter a new username");
} else console.log("username is available");
});