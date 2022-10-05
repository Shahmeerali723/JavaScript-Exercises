/* A for loop that iterates through the array of usernames. If the username is admin, it will print a
message to the console. If the username is not admin, it will print a different message to the
console. */
let username = ["user1", "user2", "user3", "user4", "admin"];
for (let i = 0; i < username.length; i++) {
if (username[i] === "admin")
    console.log("Hello admin, would you like to see a status report?");
else
    console.log("Greetings, ", username[i], ", thank you for logging in again");
}