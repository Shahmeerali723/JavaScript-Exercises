/**
 * The sandwich function takes in any number of arguments and prints them out
 * @param args - ["tikka", "masala"]
 */
const sandwich = (...args) => {
    console.log("Ingreidents you want are: ");
    args.map((idx) => console.log(idx));
};
sandwich("tikka", "masala");