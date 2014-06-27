module.exports = function (){
  return {
    add: function(num1, num2) { 
      num1+num2;
       },
    multiply: function(num1, num2) {
         num1*num2;
       },
    square: function(num) {
        Math.pow(2,num);
    }
  }
};