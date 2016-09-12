var numberContainer = document.getElementById('numbersarea');
var operationContainer = document.getElementById('operationsarea');
var displayContainer = document.getElementById('display');
var functionContainer = document.getElementById('functionsarea');

var buttonsArray = [
  {value: 7, id: 'seven', dataset: 'number'},{value: 8, id:'eight', dataset: 'number'},
  {value: 9, id:'nine', dataset: 'number'},{value: 4, id:'four', dataset: 'number'},
  {value: 5, id:'five', dataset: 'number'},{value: 6, id:'six', dataset: 'number'},
  {value: 1, id:'one', dataset: 'number'},{value: 2, id:'two', dataset: 'number'},
  {value: 3, id:'three', dataset: 'number'},{value: 0, id:'zero', dataset: 'number'},
  {value: '00', id:'doubleZero', dataset: 'doubleZero'},{value: '.', id:'dot', dataset: 'decimal'}];

var operationsArray = [
  {value: '/', id:'divide', dataset: 'operation'},{value: 'x', id:'multiply', dataset: 'operation'},
  {value: '-', id:'subtract', dataset: 'operation'},{value: '+', id: 'add', dataset: 'operation'},
  {value: '=', id:'equal', dataset: 'operation'}];

var functionsArray = [{value:'get balance', id: 'balance'},
  {value: 'deposit cash', id: 'deposit'},
  {value: 'withdraw cash', id: 'withdraw'}];

var Calculator = calculatorModule();

var numberToStore = 0;
var lastClickedoperation = '';
var funds = 0;
var numberToggle = true;

function clearDisplay(event) {
  displayContainer.innerHTML = '';
  numberToStore = 0;
}

function createBoxes(){
  //Numbers
  for(var i=0; i < buttonsArray.length; i++) {
    var btn = document.createElement('div');
    btn.id = buttonsArray[i].id;
    btn.innerHTML = buttonsArray[i].value;
    btn.dataset.context = buttonsArray[i].dataset;
    btn.addEventListener('click', function(){
      if (this.dataset.context === 'number' || 'doubleZero' || 'decimal') {
        displayContainer.innerHTML = displayContainer.innerHTML + this.innerHTML;
        numberToggle = true;
      }
    });
    numberContainer.appendChild(btn);
  }
  //Operations and equal
  for (var j = 0; j < operationsArray.length; j++) {
    var operationBox = document.createElement('div');
    operationBox.id = operationsArray[j].id;
    operationBox.innerHTML = operationsArray[j].value;
    operationBox.dataset.context = operationsArray[j].dataset;
    operationBox.addEventListener('click', function (){
      if (this.id !== 'equal') {
        numberToStore = parseFloat(displayContainer.innerHTML);
        Calculator.load(parseFloat(displayContainer.innerHTML));
        lastClickedoperation = this.id;
        clearDisplay();
      } else {
          if (this.id === 'equal') {
            switch (lastClickedoperation){
              case 'add':
                Calculator.add(parseFloat(displayContainer.innerHTML));
                displayContainer.innerHTML = Calculator.getTotal();
                lastClickedoperation = null;
                numberToggle = false;
                break;
              case 'subtract':
                Calculator.subtract(parseFloat(displayContainer.innerHTML));
                displayContainer.innerHTML = Calculator.getTotal();
                lastClickedoperation = null;
                numberToggle = false;
                break;
              case 'multiply':
                Calculator.multiply(parseFloat(displayContainer.innerHTML));
                displayContainer.innerHTML = Calculator.getTotal();
                lastClickedoperation = null;
                numberToggle = false;
                break;
              case 'divide':
                Calculator.divide(parseFloat(displayContainer.innerHTML));
                displayContainer.innerHTML = Calculator.getTotal();
                lastClickedoperation = null;
                numberToggle = false;
                break;
            } //eof switch
          } //eof if
        }
  });
    operationContainer.appendChild(operationBox);
  } // eof operations button
} // eof create boxes
createBoxes ();

function createFunctions() {
  for (var k = 0; k < functionsArray.length; k++) {
    var functionBox = document.createElement('div');
    functionBox.id = functionsArray[k].id;
    functionBox.innerHTML = functionsArray[k].value;
    functionContainer.appendChild(functionBox);
    functionBox.addEventListener('click', function () {
      if (numberToggle) {
        Calculator.load(parseFloat(displayContainer.innerHTML));
        numberToggle = false;
      }
      switch (this.id) {
        case 'deposit':
          funds = funds + Calculator.getTotal();
          Calculator.load(0);
          Calculator.saveMemory();
          clearDisplay();
          break;
        case 'balance':
          displayContainer.innerHTML = funds;
          break;
        case 'withdraw':
          if (funds >= Calculator.getTotal()) {
            funds = funds - Calculator.getTotal();
            Calculator.load(0);
            clearDisplay();
          } else {
            alert('No sufficient funds for withdraw!');
          }
          break;
      }
    }); // eof eventlistener
  }
} //eof createFunctions
createFunctions();






