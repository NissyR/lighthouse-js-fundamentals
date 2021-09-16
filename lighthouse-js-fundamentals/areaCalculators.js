function calculateRectangleArea(length, width) {
    if(length >= 0 && width >= 0) {
return area = length * width;
    } else {
        return undefined;
    }
}
function calculateTriangleArea(base, height) {
    if(base >= 0 && height >= 0) {
return area = base * height / 2;
    } else {
        return undefined;
    }

}
function calculateCircleArea(radius) {
    if(radius >= 0) {
return area = Math.PI * radius**2;
    } else {
        return undefined;
}
}
console.log(calculateRectangleArea(10, 5));
console.log(calculateRectangleArea(1.5, 2.5));
console.log(calculateRectangleArea(10, -5));

console.log(calculateTriangleArea(10, 5));
console.log(calculateTriangleArea(3, 2.5));
console.log(calculateTriangleArea(10, -5));

console.log(calculateCircleArea(10));
console.log(calculateCircleArea(3.5));
console.log(calculateCircleArea(-1));