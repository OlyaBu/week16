1. Какими способами можно объявлять массивы в JS? 
                               

через 

let arr = new Array();
let arr = [];

или напряму объявлять начало переменных 

    `let fruits = ["Яблоко", "Апельсин", "Слива"];`

а еще вот так:
`let arr = *new Array*("Яблоко", "Груша", "и тд");`

2. Приведите 3 примера, из тех, которые не были озвучены в материалах, что могло бы быть массивом? 
- содержание книги
- учебная программа 
- круги ада у Данте

3. Каким еще способом, кроме `pop` и `shift` можно удалять элементы из массивов?  
`splice (может удалять например с середины)`
4. Можно ли пропускать части **for**? 
        
Что получится, если написать `for(;;)`? 
        будет бесконечный цикл  

5. Самостоятельно разберитесь, как работает цикл while и приведите два примера кода с его использованием.

6. Какой получится массив, если создать его вот так `new Array(5)`?
`undefined`
7. Как вывести чётные числа от 2 до 10 при помощи цикла for?

8. Каков будет результат выполнения этого кода? Почему?
 `undefined`
9. Три основных способа перебора элементов массива?

`Метод forEach и родственные методы`

`Цикл for`

`Правильное использование цикла for...in`

10. Как можно выбрать все инпуты из вашей формы регистрации из прошлого ДЗ с помощью `querySelector*`?

11. Самостоятельно разберитесь, как можно проще всего сделать сортировку в массиве на JS? 
            Сортировка массивов в JavaScript делается через метод array.sort(), этот метод возможно также недооценен, как и неверно многими понимаем. Во время вызова sort(), сам по себе он сортирует массив в алфавитном порядке
12. Как можно принудительно остановить выполнение цикла?  
             использовать оператор break.