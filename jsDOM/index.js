var form = document.querySelector('.form');

var nome = form.querySelector('#name');
var dataNasc = form.querySelector('#birth-date');

var submit = document.querySelector('#submit');

submit.addEventListener('click' , (e) => {
    e.preventDefault();

    console.log(nome.value);
    console.log(dataNasc.value);
})