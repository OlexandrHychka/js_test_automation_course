let name = prompt('Введіть своє ім`я:', '');
let age = prompt('Введіть свій вік:', '');
age = Number(age);
if (isNaN(age) || age <= 0) {
    alert("Використовуйте числа більше 0!");
    age = undefined;
}
const YES = 'так'
const NO = 'ні'

if (age < 18) {
    alert("Ви ще неповнолітній(я).")
} else if (age >= 18) {
    alert("Ви повнолітній працівник.");
    const isWorker = prompt('Чи працюєте/працювали Ви? (так/ні):').toLowerCase();
    if (isWorker === YES) {
        let experience = prompt('Скільки років досвіду маєте?');
        experience = Number(experience);
        if (experience < 3) {
            alert("Ви — початківець. Все ще попереду!")
        } else if (experience >= 3 && experience <= 9) {
            alert("Ви — досвідчений працівник.")
        } else {
            alert("Ви — справжній профі у своїй справі!")
        }
    }
    else if (isWorker === NO) {
        alert("Ви повнолітній, але поки не працюєте.")
    }
    else {
        alert('Використовуйте одне з двох значень: так або ні')
    }
}