const carsInput = [
{
time: 1568329654807,
speed: 40,
},
{
time: 1568329821632,
speed: 42,
},
{
time: 1568331115463,
speed: 35
}
];
const speedInput = 38;
const output = [
{
time: 1568329654807,
speed: 40,
},
{
time: 1568329821632,
speed: 42,
},
{
time: 1568331115463,
speed: 35
},
{
time: 1568431216417,
speed: 38
}
];
function carPassing(cars, speed) {
    let newCarList = [cars];
    if(cars && cars.length && speed){
        newCarList.push({
            time: Date.now(),
            speed
        });
    }
    return newCarList;
};
console.log(carPassing(carsInput, speedInput));