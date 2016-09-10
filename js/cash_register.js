var mainContainer = document.getElementById('boxarea');
var opContainer = document.getElementById('operationsarea');
var sumContainer = document.getElementById('sum');

var boxArray = [
  {in: 7, id: 'seven', dataset: 'number'},{in: 8, id:'eight', dataset: 'number'},
  {in: 9, id:'nine', dataset: 'number'},{in: 4, id:'four', dataset: 'number'},
  {in: 5, id:'five', dataset: 'number'},{in: 6, id:'six', dataset: 'number'},
  {in: 1, id:'one', dataset: 'number'},{in: 2, id:'two', dataset: 'number'},
  {in: 3, id:'three', dataset: 'number'},{in: 0, id:'zero', dataset: 'number'},
  {in: '00', id:'doubleZero', dataset: 'doubleZero'},{in: '.', id:'dot', dataset: 'decimal'}];

var operationsArray = [
  {in: '/', id:'divide', dataset: 'operation'},{in: 'x', id:'multiply', dataset: 'operation'},
  {in: '-', id:'subtract', dataset: 'operation'},{in: '+', id: 'add', dataset: 'operation'},
  {in: '=', id:'equal', dataset: 'operation'}];

var functionsArray = ['clear','get balance','deposit cash','withdraw cash'];
var clickedNumber = 0;
var Calculator = calculatorModule();


var total = 0;
var fullNumber = '';
var tempMemory = 0;
function createBoxes(){

  for(var i=0; i < boxArray.length; i++) {
    var btn = document.createElement('div');
    btn.id = boxArray[i].id;
    btn.innerHTML = boxArray[i].in;
    btn.dataset.context = boxArray[i].dataset;

    btn.addEventListener('click', function(){
      console.log('what is it?', this.dataset.context);
      if (this.dataset.context === 'number') {
        //result = aNumber(this);
        //fullNumber = fullNumber + result.getDisplayTotal();
        fullNumber = fullNumber + this.innerHTML;
        sumContainer.innerHTML = fullNumber;
        total = parseInt(fullNumber);

      }

      console.log('total', total);
      console.log('full Number', fullNumber);

    });

    mainContainer.appendChild(btn);
  }

var inIt = 0;
  for (var j = 0; j < operationsArray.length; j++) {
    var boxOp = document.createElement('div');
    boxOp.id = operationsArray[j].id;
    boxOp.innerHTML = operationsArray[j].in;
    boxOp.dataset.context = operationsArray[j].dataset;

    boxOp.addEventListener('click', function (){

      console.log('what is it in operations?', this.dataset.context);
      if (this.dataset.context === 'operation') {

        inIt = Calculator.getTotal();
        console.log('inIt must same as total', inIt);
        switch (this.id){
          case 'add':
            Calculator.load(parseInt(fullNumber));
            tempMemory = Calculator.add(total); //EZ NEM JO VAVITANI
            console.log('temporary memory', tempMemory);
            fullNumber = '';
            total = '';
            break;
          case 'subtract':
            tempMemory = Calculator.subtract(total);
            console.log('temporary memory', tempMemory);
            fullNumber = '';
            break;
          case 'multiply':
            tempMemory = Calculator.multiply(total);
            console.log('temporary memory', tempMemory);
            fullNumber = '';
            break;
          case 'divide':
            tempMemory = Calculator.divide(total);
            console.log('temporary memory', tempMemory);
            fullNumber = '';
            break;
        }


      }
  });

    opContainer.appendChild(boxOp);
  }

}
createBoxes ();



function operation (argOfOperation,clickedNumber) {
  switch (argOfOperation) {
    case 'add':
      console.log('addcase');
      Calculator.add(clickedNumber);
      console.log('?total',_total);
      break;
  }

}




