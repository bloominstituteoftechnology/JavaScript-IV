// CODE here for your Lambda Classes

Just studying Basic JS from Day one of this week 


// FUNCTION DECLARATATION========
function add(num1, num2) {
    return num1 + num2
  }
  console.log(add(3, 4))
  
  // FUNCTION EXPRESSION  (ANONYMOUS)====== used when we want to control when the function is invoked. (Indiator is the  =    ) 
  let multiply = function(num1, num2) {
    return num1 * num2 
  }
  console.log(multiply(4,4))
  
  let square =(num) => {return  num * num}
   console.log (square(9))
  
  // FUNCTION DECLARATATION==========
  function divide(num1, num2) {
    return num1 / num2;
  }
  console.log(divide(90, 9))
  
  // ================== ARROW  ==================
  // You don't need curly braces {} or RETURN if only returning ONE VALUE 
  let div = (num1, num2) => { 
  return num1 / num2}
  
  console.log(div(80, 2))
  
  
  let talk = (function() {
    return " I was invoked immediately!"
  })();
  console.log(talk)
     