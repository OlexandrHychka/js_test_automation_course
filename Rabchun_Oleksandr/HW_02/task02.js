const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question) => {
  return new Promise((resolve) => rl.question(question, resolve));
};

(async () => {
  const name = await askQuestion('Як вас звати? ');
  const ageInput = await askQuestion('Скільки вам років? ');
  const workingStatus = await askQuestion('Чи працюєте ви? (так/ні): ');

  const age = Number(ageInput);

  const normalizedWorking = workingStatus.trim().toLowerCase();

  console.log(`Привіт, ${name}!`);

  if (age < 18) {
    console.log('Ви ще неповнолітній(я).');
  } else {
    if (normalizedWorking === 'так') {
      console.log('Ви повнолітній працівник.');

      const experienceInput = await askQuestion('Скільки років ви вже працюєте? ');
      const experience = Number(experienceInput);

      if (isNaN(experience) || experience < 0) {
        console.log('Стаж має бути додатнім числом!');
      } else if (experience < 3) {
        console.log('Ви — початківець. Все ще попереду!');
      } else if (experience >= 3 && experience < 10) {
        console.log('Ви — досвідчений працівник.');
      } else {
        console.log('Ви — справжній профі у своїй справі!');
      }
    } else {
      console.log('Ви повнолітній, але поки не працюєте.');
    }
  }

  rl.close();
})();
