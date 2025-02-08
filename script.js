"use strict"
// 1
function delayPromise(value, delay){
return new Promise(resolve => {
    resolve(setTimeout(() => {
        console.log(value);
    }, delay))
    
})
};
const one =  delayPromise('Not yet', 4000);
const two = delayPromise('Script', 1700);
const three =  delayPromise('Hello', 200);
const four = delayPromise('Java', 1400);
const five =  delayPromise('Bye', 2500);

const arrPromises = [one, two, three, four, five];

Promise.all(arrPromises).then(value => console.log(value));

// 2
function randomDelay(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
};
const oneS = Promise.resolve(randomDelay(1500, 5000));
const twoS = Promise.resolve(randomDelay(1500, 5000));
const threeS =  Promise.resolve(randomDelay(1500, 5000));
const fourS = Promise.resolve(randomDelay(1500, 5000));
const fiveS =  Promise.resolve(randomDelay(1500, 5000));

const ourPromises = [oneS, twoS, threeS, fourS, fiveS];

Promise.race(ourPromises).then(fastest => console.log(`The fastest promise: ${fastest}`));
