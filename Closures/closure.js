let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;

let a = 1, b = 3;

let identifyF = (s) => {
    return function () {
        return s;
    }
}
let ten = identifyF(10)
// console.log(ten())


let addf = (x) => {
    return function (y) {
        return x + y;
    }
}

let add12 = addf(12);
// console.log(add12(10))



let curry = (fn, x) => {
    return function (y) {
        return fn(x, y)
    }
}

// let sum10=curry(add,10)

let genF = (fn) => {
    return function (x) {
        return function (y) {
            return fn(x, y);
        }
    }
}

let sumBet = genF(add);
// console.log(sumBet(1)(2))


let reverse = (fn) => {
    return function (x, y) {
        return fn(y, x);
    }
}

let revSub = reverse((sub))

// console.log(revSub(10,5))

let addG = (x) => {
    if(n===null){
        return add
    }
}


function myCounter(start){
    let count=start;

    return{
        up:()=>{count++,console.log(count)},
        down:()=>{count--,console.log(count)},
        get:()=>{return count; }
    }
}


let myCounterr=myCounter(5);
// console.log(myCounterr.count)
myCounterr.up(); // 6
// console.log(myCounterr.count)
myCounterr.up(); // 7
// console.log(myCounterr.count)
myCounterr.down(); // 6
console.log(myCounterr.get())

