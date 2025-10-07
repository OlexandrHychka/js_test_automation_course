const name = prompt(`Your name: `)
    console.log(`Name: ${name}`)

let age;
do {
    age = prompt(`Your age: `);
} while (isNaN(Number(age)));
const parsedAge = Number(age);
    console.log(`Age: ${parsedAge}`);

let isWorker;
do {
    isWorker = prompt('Is Worker? (y/n): ');
} while (isWorker !== 'y' && isWorker !== 'n');
    console.log(`Worker: ${isWorker}`)

if (parsedAge < 18) {
    alert("You are still underage.");
} else if (parsedAge >= 18 && isWorker === 'y') {
    alert("You are an adult employee.");

    let experience;
    do {
        experience = prompt("How many years have you been working?");
    } while (isNaN(Number(experience)) || Number(experience) < 0);
    const parsedexperience = Number(experience);

    if (parsedexperience < 3) {
        alert("You are a beginner. Everything is still ahead of you!");
    } else if (parsedexperience >= 3 && parsedexperience <= 9) {
        alert("You are an experienced employee.");
    } else { 
        alert("You are a true professional in your field!");
    }
} else if (parsedAge >= 18 && isWorker === 'n') {
    alert("You are an adult, but you are not working yet.") }
