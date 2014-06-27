module.exports = function (num1,num2){
  return {
    add: function(num1, num2) { 
      return num1+num2;
       },
    multiply: function(num1, num2) {
         return num1*num2;
       },
    square: function(num) {
        return Math.pow(2,num);
    }
  }
};