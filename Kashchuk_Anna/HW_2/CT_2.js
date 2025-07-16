const prompt = require("prompt-sync")();
let Survey = {
name: prompt("Імʼя:"),
age: Number(prompt("Вік:")),
isWorker: prompt("Чи працюєте? (Yes/No):").trim().toLowerCase()
}

let experience;

if (isNaN(Survey.age) || Survey.age < 0) {
  console.log("Будь ласка, введіть число.");
}

if (Survey.isWorker !== "yes" && Survey.isWorker !== "no") {
  console.log("Будь ласка, введіть 'yes' або 'no'.");
}

if (Survey.age < 18){
     console.log('Ви ще неповнолітній(я)')
} else if (Survey.age >= 18 && Survey.isWorker === "yes"){
    console.log('Ви повнолітній працівник.')
} else if (Survey.age >= 18 && Survey.isWorker === "no"){
    console.log('Ви повнолітній, але поки не працюєте.')
}

if (Survey.isWorker === "yes" && Survey.age >=18){
experience = Number(prompt("Скільки років працюєте?"));
if (!isNaN(experience) && experience >= 0) {
if (experience < 3){
     console.log('Ви — початківець. Все ще попереду!')
} else if (experience >= 3 && experience < 9){
    console.log('Ви — досвідчений працівник.')
} else if (experience >= 10){
    console.log('Ви — справжній профі у своїй справі!')
}
} else {
  console.log("Будь ласка, введіть коректне значення.");
}
}