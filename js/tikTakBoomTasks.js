const tasks = `

    [
        {
            "question": "JavaScript–это",
            "answer1": { "result": true, "value": "Язык программирования" },
            "answer2": { "result": false, "value": "Язык разметки" }
        },
        {
            "question": "Одна из основных функций JavaScript–это",
            "answer1": { "result": false, "value": "Оформление внешнего вида веб-страниц" },
            "answer2": { "result": true, "value": "Организация интерактива с пользователем" }
        },
        {
            "question": "Функция alert()отвечает за",
            "answer1": { "result": false, "value": "Вывод поля для ввода пользователем информации" },
            "answer2": { "result": true, "value": "Вывод информации в виде сообщения пользователю" }
        },
        {
            "question": "Наибольшее число (Number), которое может быть представлено в JavaScript",
            "answer1": { "result": true, "value": "2⁵³-1" },
            "answer2": { "result": false, "value": "2³⁴-1" }
        },
        {
            "question": "Если в функции toPrecision()не указан аргумент, то",
            "answer1": { "result": true, "value": "Функция возвращает изначальное число" },
            "answer2": { "result": false, "value": "Функция возвращает целое число" }
        },
        {
            "question": "Функция Math.asin(x) вычисляет",
            "answer1": { "result": true, "value": "Арксинус x" },
            "answer2": { "result": false, "value": "Гиперболический синусx" }
        },
        {
            "question": "Если функция indexOf()не находит указанную в аргументе подстроку, то",
            "answer1": { "result": false, "value": "Она выдаст ошибку" },
            "answer2": { "result": true, "value": "Она вернёт значение -1" }
        },
        {
            "question": "Суррогатная пара –это",
            "answer1": { "result": true, "value": "Два однобайтных символа, которые в кодировке Юникод считаются как один символ" },
            "answer2": { "result": false, "value": "4-байтный символ, который в кодировке Юникод считается как два символа" }
        },
        {
            "question": "В функции substr()счёт начинается с конца, если",
            "answer1": { "result": true, "value": "Первый аргумент отрицателен" },
            "answer2": { "result": false, "value": "Оба указанных аргумента отрицательны" }
        },
        {
            "question": "Какой из языков програмирования стал основой для JavaScript?",
            "answer1": { "result": true, "value": "ECMAScript" },
            "answer2": { "result": false, "value": "JScript" }
        },
        {
            "question": "Что делает функция console.clear()?",
            "answer1": { "result": false, "value": "Делает консоль прозрачной и удобной для работы" },
            "answer2": { "result": true, "value": "Очищает консоль" }
        },
        {
            "question": "К какому типу данных относится true?",
            "answer1": { "result": false, "value": "String" },
            "answer2": { "result": true, "value": "Boolean" }
        },
        {
            "question": "Между let и var нет существенных различий",
            "answer1": { "result": false, "value": "Правда" },
            "answer2": { "result": true, "value": "Не правда" }
        },
        {
            "question": "Какой из методов поиска элемента веб-страницы считается устаревшим?",
            "answer1": { "result": true, "value": "document.getElementById()" },
            "answer2": { "result": false, "value": "document.querySelector()" }
        },
        {
            "question": "Что такое Событие?",
            "answer1": { "result": true, "value": "Это сигнал от браузера о том, что что-то произошло" },
            "answer2": { "result": false, "value": "Это функция, которая сработает при щелчке мыши" }
        },
        {
            "question": "Что в JavaScript записывается с помощью знака &&?",
            "answer1": { "result": false, "value": "Дизъюнкция или «логическая сумма»" },
            "answer2": { "result": true, "value": "Конъюнкция или «логическое умножение»" }
        },
        {
            "question": "О чём гласит Закон исключения третьего?",
            "answer1": { "result": true, "value": "Что два противоположных значения не могут быть одновременно ложными" },
            "answer2": { "result": false, "value": "Что два противоположных выражения не могут быть одновременно истинными" }
        },
        {
            "question": "Сколько аргументов может принимать функция?",
            "answer1": { "result": true, "value": "Любое количество аргументов" },
            "answer2": { "result": false, "value": "Не более двух аргументов" }
        },
        {
            "question": "Что делает метод массива push?",
            "answer1": { "result": true, "value": "Добавляет элемент в конец массива" },
            "answer2": { "result": false, "value": "Удаляет элемент из конца массива" }
        },
        {
            "question": "Функция parseFloat() преобразует текст в",
            "answer1": { "result": false, "value": "Целое число" },
            "answer2": { "result": true, "value": "Вещественное число" }
        },
        {
            "question": "Как правильно вставить внешний скрипт?",
            "answer1": { "result": false, "value": "<script href='sample1.js'>" },
            "answer2": { "result": true, "value": "<script src='sample1.js'>" }
        },
        {
            "question": "Как вызвать функцию 'myFunction'?",
            "answer1": { "result": false, "value": "call function myFunction()" },
            "answer2": { "result": true, "value": "myFunction()" }
        },
        {
            "question": "Как найти наибольшее из двух чисел?",
            "answer1": { "result": false, "value": "Math.ceil(x, y)" },
            "answer2": { "result": true, "value": "Math.max(x, y)" }
        },
        {
            "question": "Как найти наибольшее из двух чисел?",
            "answer1": { "result": false, "value": "Math.ceil(x, y)" },
            "answer2": { "result": true, "value": "Math.max(x, y)" }
        },
        {
            "question": "Какой из приведенных кодов изменит содержание HTML елемента: <p id='demo'>This is a demo text.</p> ",
            "answer1": { "result": false, "value": "$demo.innerHTML = 'Hello World!';" },
            "answer2": { "result": true, "value": "document.getElementById('demo').innerHTML = 'Hello World!';" }
        },
        {
            "question": "Что вернет сравнение 0.1 + 0.2 === 0.3?",
            "answer1": { "result": false, "value": "true" },
            "answer2": { "result": true, "value": "false" }
        },
        {
            "question": "Чему равно такое выражение ?  [] + false - null + true",
            "answer1": { "result": false, "value": "undefined" },
            "answer2": { "result": true, "value": "NaN" }
        },
        {
            "question": "Что выведет этот код ? alert( '1'[0] ); ",
            "answer2": { "result": false, "value": "0" },
            "answer1": { "result": true, "value": "1" }
        },
        {
            "question": "Что содержит не инициализированная переменная?",
            "answer1": { "result": false, "value": "null" },
            "answer2": { "result": true, "value": "undefined" }
        },
        {
            "question": "Что делает оператор === ?",
            "answer1": { "result": false, "value": "Сравнивает по ссылке, а не по значению." },
            "answer2": { "result": true, "value": "Сравнивает без приведения типа." }
        }
    ]
`;
