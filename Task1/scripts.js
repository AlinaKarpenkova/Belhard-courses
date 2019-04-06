// Task 1
var admin, name;
name = "Василий";
admin = name;
alert(admin);

// Task 2
var age = prompt('Сколько вам лет?', '');
if (result > 0) {
    alert('Значение больше нуля')
} else if (result = 0) {
    alert('Значение равно 0')
} else {
    alert('Значение меньше нуля')
}

// Task 3
var login = prompt('введите логин', '');
if (login == 'admin') {
    var password = prompt('введите пароль', '');
    if (password === '123456') {
        alert('Добро пожаловать!');
    } else if (password === null || password === undefined) {
        alert('Вход отменён');
    } else {
        alert('пароль не верен');
    }
} else if (login === null || login === undefined) {
    alert('Вход отменён');
} else {
    alert('Пользователь не найден');
}

// Task 4
var age = prompt('введите число', '');
if (age <= 90 && age >= 14) {
    alert('Входит в диапозон');
} else {
    alert('неверное значение');
}

// Task 5
var i;
for (i = 2; i <= 10; i += 2) {
    alert(i);
}

// Task 6
var num = 0;
while (num < 100) {
    num = prompt('Введите число больше 100', '');
}

// Task 7
a + b < 4 ? 'Мало' : 'Много';

// Task 8
var i = 1;
while (i <= 3) {
    console.log('Номер ' + i + '!');
    i++
}

// Task 9
if (browser === 'IE') {
    alert('О, да у вас IE!');
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
    alert('Да, и эти браузеры мы поддерживаем');
} else {
    alert('Мы надеемся, что и в вашем браузере все ок!');
}
