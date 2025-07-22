const readline = require('readline');


const products = ['хліб', 'молоко', 'яблука'];
const prices = [20, 35, 15]; 

const cart = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function ask(question) {
  return new Promise(resolve => {
    rl.question(question, answer => {
      resolve(answer.trim().toLowerCase());
    });
  });
}

(async function main() {
  console.log('Ласкаво просимо до нашого онлайн‑магазину!');
  console.log('Доступні товари:', products.join(', '));
  console.log('Щоб завершити, введіть "стоп".\n');


  while (true) {
    const answer = await ask('Який товар додаємо? ');
    if (answer === 'стоп') {
      break;
    }
    const index = products.indexOf(answer);
    if (index !== -1) {
      cart.push(answer);
      console.log(`✔ Додано "${answer}" до кошика.`);
    } else {
      console.log(`✖ Товар "${answer}" не знайдено. Спробуйте ще раз.`);
    }
  }

  rl.close();


  if (cart.length === 0) {
    console.log('\nВаш кошик порожній.');
    return;
  }

  console.log('\nВміст вашого кошика:');

  const summary = {};
  cart.forEach(item => {
    summary[item] = (summary[item] || 0) + 1;
  });
  for (const [item, qty] of Object.entries(summary)) {
    console.log(`- ${item}: ${qty} шт.`);
  }


  let total = cart.reduce((sum, item) => {
    const idx = products.indexOf(item);
    return sum + prices[idx];
  }, 0);

  if (summary['хліб'] && summary['молоко']) {
    const discount = total * 0.10;
    total = total - discount;
    console.log('\nВаша комбінація "хліб + молоко" дає знижку 10%:', discount.toFixed(2), 'грн.');
  }

  console.log(`\nЗагальна сума до сплати: ${total.toFixed(2)} грн.`);


  if (total > 500) {
    console.log('🎉 У вас безкоштовна доставка!');
  }
})();
