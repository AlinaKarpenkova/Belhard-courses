 Task 1

 var styles = ['Джаз', 'Блюз'];
 styles.push('Рок-н-Ролл');
 console.log(styles);
 styles[styles.length - 2] = 'Классика';
 console.log(styles.shift());
 console.log(styles);
 styles.unshift('Рэп', 'Рэгги');
 console.log(styles);

 Task 2

 function getLastNum(a) {
     return a.pop();
 }
 var num = [1, 5, 17];
 console.log(getLastNum(num));

 Task 3

 var num = [];
 while (true) {
     var res = prompt('Введите число', '');
     if (res === '' || isNaN(res) || res === null) break;
     num.push(+res);
 }
 var sum = 0;
 for (var i = 0; i < num.length; i++) {
     sum = sum + num[i];
 }
 console.log(sum);

 Task 4

 var arr = [1, 2, 5, 9, 8, 47];

 function find(arr, value) {
     for (var index = 0; index < arr.length; index++) {
         if (arr[index] == value)
             return index;
     }
     return -1;
 }
 console.log(find(arr, 6));

 Task 5

 function addClass(obj, cls) {
     var classes = [];
     if (obj.className) {
         classes = obj.className.split(' ')
     }
     for (var i = 0; i < classes.length; i++) {
         if (classes[i] == cls) return;
     }
     classes.push(cls);
     obj.className = classes.join(' ');
 }

 var obj = {
     className: 'open menu'
 };
 addClass(obj, 'new');
 addClass(obj, 'open');
 addClass(obj, 'me');
 alert(obj.className)
 //
 Task 6

 function removeClass(obj, cls) {
     var classes = obj.className.split(' ');
     for (var i = 0; i < classes.length; i++) {
         if (classes[i] == cls) {
             classes.splice(i, 1);
             i--;
         }
     }
     obj.className = classes.join(' ');
 }
 var obj = {
     className: 'open menu'
 };
 removeClass(obj, 'open');
 removeClass(obj, 'blabla');
 console.log(obj.className);
