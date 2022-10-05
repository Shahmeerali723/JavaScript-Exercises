/* A for loop that iterates through the array of usernames and prints a message to the console. */
let username = ["us1", "us2", "us3", "us4", "admin"];
for (let i = 0; i < username.length; i++) {
if (username[i] === "admin")
    console.log("Hello admin, would you like to see a status report?");
else
    console.log("Greetings, ", username[i], ", thank you for logging in again");
}
username = [];
if (username.length < 1) console.log("We need to find some users!");