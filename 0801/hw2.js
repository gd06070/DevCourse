class Calculator {
    static add(a, b) {
      return a + b;
    }
  
    static subtract(a, b) {
      return a - b;
    }
  }
  
  console.log('더하기:', Calculator.add(10, 5));        // Addition: 15
  console.log('빼기:', Calculator.subtract(10, 5));  // Subtraction: 5

  function Calculator() {}
  
  Calculator.add = function(a,b){
    return a+b;
  }
  Calculator.subtract = function(a,b){
    return a-b;
  }

  console.log('더하기:', Calculator.add(8, 5));        // Addition: 15
  console.log('빼기:', Calculator.subtract(9, 5)); 