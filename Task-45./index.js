/**
 * It takes a manufacturer, model, and an object of arguments, and returns an object with the
 * manufacturer, model, and the arguments.
 * @param manufacturer - "Royal Roycs"
 * @param model - "22"
 * @param args - { doors: 4, wheels: 4 }
 */
const make_car = (manufacturer, model, args) => {
  let obj = { manufacturer, model };
  //   console.log(Object.entries(args));
  Object.entries(args).map((idx) => (obj[idx[0]] = idx[1]));
  console.log(obj);
};
make_car("Royal Roycs", "22", { doors: 4, wheels: 4 });