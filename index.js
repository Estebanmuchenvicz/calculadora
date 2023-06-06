const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const btnNumber = document.querySelectorAll('.number');
const btnOperator = document.querySelectorAll('.operator');
const display = new Display(displayValorAnterior, displayValorActual);

btnNumber.forEach(boton =>{
    boton.addEventListener('click',() => display.agregarNumero(boton.innerHTML));
});

btnOperator.forEach(boton =>{
    boton.addEventListener('click', () => display.computar(boton.value))
});
