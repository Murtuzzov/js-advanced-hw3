//ЗАДАЧА №1
// Создать html-страницу для ввода имени пользователя.
// Необходимо проверять каждый символ, который вводит пользователь. Если он ввел цифру, то не отображать ее в input.

// const container = document.querySelector(".container");
// const form = document.querySelector(".form");
// const display = document.querySelector('[data-action="display"]');

// let filteredInput = "";
// display.addEventListener("input", (e) => {
//   if (!isNaN(Number(e.data))) {
//     display.value = filteredInput;
//     return;
//   }
//   filteredInput += e.data;
// });

//_________________________________________________________

// Задание №2
// Создать html-страницу с кнопкой Открыть и модальным
// окном. На модальном окне должен быть текст и кнопка Закрыть.
// Изначально модальное окно не отображается. При клике на
// кнопку Открыть появляется модальное окно, на кнопку Закрыть –
// исчезает.

// const button = document.querySelector(".btn");
// let modalWindow = document.querySelector(".modal-window");
// let modalButton = document.querySelector(".modal-btn");

// button.addEventListener("click", () => {
//   modalWindow.style.display = "block";
//   container.style.backgroundColor = "#f7f7f7";
// });

// modalButton.addEventListener("click", () => {
//   modalWindow.style.display = "none";
//   container.style.backgroundColor = "white";
// });

//ЗАДАНИЕ №3

// const field = document.querySelector(".container");

// field.addEventListener("click", (event) => {
//   const ball = document.querySelector(".ball");
//   ball.style.left = event.clientX + "px";
//   ball.style.top = event.clientY + "px";
// });

