/**
 * The function describe_city() takes two parameters, city and country. If the country parameter is not
 * provided, the function assumes the country is Pakistan
 * @param city - This is a required parameter.
 * @param [country=Pakistan] - This is the parameter that has a default value.
 */
const describe_city = (city, country = "Pakistan") => {
    console.log(`${city} is in ${country}`);
};

describe_city("Karachi");
describe_city("Islamabad");
describe_city("Peris", "France");
