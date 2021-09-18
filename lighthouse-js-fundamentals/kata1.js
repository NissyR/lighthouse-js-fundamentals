let sumLargestNumbers = function(data) {
let highestInt = 0;
let nextHighestInt = 0;
for (var i = 0; i < data.length; i ++) {
    if (data[i] > highestInt) {
nextHighestInt = highestInt;
highestInt = data[i];
    } else if (data[i] > nextHighestInt) {
        nextHighestInt = data[i];
    } else{
        continue;
    }
}
return highestInt + nextHighestInt;
}
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
