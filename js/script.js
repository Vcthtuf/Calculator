'use strict';

window.addEventListener('DOMContentLoaded', function () {

    // calculator

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;  // начальное значение суммы

    persons.addEventListener('input', function () {  // обработка ввода числа людей
        personSum = +this.value;
        total = (personSum + daysSum) * 4000;       // вычисление суммы

        if (restDays.value == '' || persons.value == '') {               // если поле "Дни" не заполнено
            totalValue.innerHTML = 0;             // то не выводим результат
        } else {                                  // иначе
            totalValue.innerHTML = total;         // выводим результат
        }
    });

    restDays.addEventListener('input', function () {    // обработка ввода числа дней
        daysSum = +this.value;
        total = (personSum + daysSum) * 4000;      // вычисление суммы

        if (persons.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener('change', function () {
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value; // получение данных из options select
        }
    });
});