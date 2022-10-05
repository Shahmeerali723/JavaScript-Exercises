/**
 * The function make_shirt() takes two arguments, size and text, and prints a message to the console
 * @param [size=L] - "M"
 * @param [text=I love Javascript] - "I love Python"
 */
const make_shirt = (size = "L", text = "I love Javascript") => {
    console.log(`The size selected is ${size} and the message that will be printed is: ${text}`
    );
};
make_shirt("M", "I love Python");