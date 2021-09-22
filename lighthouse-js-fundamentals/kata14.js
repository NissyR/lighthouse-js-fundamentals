var calculateChange = function(price, cash) {
var returnValue = cash - price; 
var change = {};

const coinTypes = ["twenty", "ten", "five", "twoDollar", "oneDollar", "quarter", "dime", "nickle", "penny"];
const coinValues = [2000, 1000, 500, 200, 100, 25,10, 5, 1];

var amount;
for (var i = 0; i < coinValues.length; i++) {
    amount = Math.floor(returnValue/coinValues[i]);
    if (amount > 0) {
        change[coinTypes[i]] = amount;
        returnValue = returnValue%coinValues[i]
    }
}

return change;

};

console.log(calculateChange(1787, 2000)); //{ twoDollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(2623, 4000)); //{ tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
console.log(calculateChange(501, 1000));  //{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
