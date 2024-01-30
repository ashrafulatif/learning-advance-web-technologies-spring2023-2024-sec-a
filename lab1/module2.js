import { greeting } from "./module1.js";
import farewell from "./module1.js";

function greet(timeOfDay) {
  console.log(greeting[timeOfDay]);
}
console.log(greet("morning"));

console.log(farewell);

export function sayGoodbye() {
    console.log(farewell);
}