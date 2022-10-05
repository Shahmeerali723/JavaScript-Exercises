/**
 * This function takes in two parameters, city and country, and logs a string to the console.
 * @param city - a string
 * @param country - a string
 */

const city_country = (city, country = "Pakistan") => {
    console.log(`"${city}, ${country}"`);
};
city_country("Karachi");
