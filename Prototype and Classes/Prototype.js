Array.prototype.getIndexOf = function ArrayGetIndex(elem) {
    let i = 0;
    for (i = 0; i < this.length; i++) {
        if (this[i] === elem) {
            return i;
        }
    }
    return -1;
}

Array.prototype.iterate = function ArrayIterate(callback) {
    let i;
    for (i = 0; i < this.length; i++) {
        callback(this[i])
    }
}

Array.prototype.transform = function ArrayTransform(callback) {
    let i;
    let newArray = []
    for (i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]))
    }
    return newArray;
}
Array.prototype.keep = function ArrayKeep(callback) {
    let i;
    let newArray = []
    for (i = 0; i < this.length; i++) {
        if (callback(this[i]))
            newArray.push(this[i])
    }
    return newArray;
}

Array.prototype.smoosh = function ArraySmoosh(depth) {
    let i;
    let newArray = []
    let aux = this
    if (typeof depth === "undefined") {
        depth = 1;
    }
    for (j = 0; j < depth; j++) {
        for (i = 0; i < aux.length; i++) {
            if (Array.isArray(aux[i])) {
                newArray = newArray.concat(aux[i])
            }
            else{newArray.push(aux[i])}
        }
        aux = newArray
        newArray=[]
    }
    return aux;
}

Array.prototype.compact = function ArrayCompact(callback) {
    let aux=0;
    let i;
    for(i=0;i<this.length;i++){
        aux=callback(aux,this[i]);
    }
    return aux;
}


let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const map1 = b.compact(reducer);

// console.log(map1)
// b.iterate(e=>{console.log(e)})