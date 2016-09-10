console.log('calculator.js');


var calculatorModule = (function() {
  var Calculator = {};

  var _total = 0;
  var _memory = 0;


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
  function validation (x){
    if (typeof(x) !== 'number') {
      throw new Error('Wrong data type you dummy');
    }
  }

  Calculator.load = function(x){
    validation(x);
    _total = x;
    return _total;
  };

  /**
   * Return the value of `total`
   * @return { Number }
   */

  Calculator.getTotal = function(){
    return _total;
  };


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
  Calculator.add = function(x){
    validation(x);
    _total = _total + x;
    return _total;
  };

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
  Calculator.subtract = function(x){
    validation(x);
    _total = _total - x;
    return _total;
  };

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
  Calculator.multiply = function(x){
    validation(x);
    _total = _total * x;
    return _total;
  };

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
  Calculator.divide = function(x){
    validation(x);
    _total = _total / x;
    return _total;
  };

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
  Calculator.recallMemory = function(){
    return _memory;
  };

  /**
   * Stores the value of `total` to `memory`
   */
  Calculator.saveMemory = function() {
    _memory = _total;
    return _memory;
  };

  /**
   * Clear the value stored at `memory`
   */
  Calculator.clearMemory = function() {
    _memory = 0;
    return _memory;
  };


  /**
   * Validation
   */



  return Calculator;
});

