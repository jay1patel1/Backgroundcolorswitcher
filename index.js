// const buttons = document.querySelectorAll('.button')
// const body = document.querySelector('body')
//
// buttons.forEach(function (button) {
//     button.addEventListener("click", function (e) {
//         switch (e.target.id) {
//             case "grey":
//                body.style.backgroundColor = e.target.id;
//                break;
//             case "white":
//                 body.style.backgroundColor = e.target.id;
//                 break;
//             case "blue":
//                 body.style.backgroundColor = e.target.id;
//                 break;
//             case "orange":
//                 body.style.backgroundColor = e.target.id;
//                 break;
//             case "pink":
//                 body.style.backgroundColor = e.target.id;
//                 break;
//         }
//         document.getElementById("colorInjection").innerText = button.id
//     })
// })

const body = document.querySelector('body');
const colorInjection = document.getElementById('colorInjection');

body.addEventListener('click', function (e) {
    if (e.target.classList.contains('button')) {
        body.style.backgroundColor = e.target.id;
        colorInjection.innerText = e.target.id;
        colorInjection.style.color = e.target.id;
    }
});