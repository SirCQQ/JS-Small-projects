class Plus {
    constructor(a, b) {
        if (typeof a === "object") {
            this.a = a.rez;
        }
        else {
        this.a = a;
        }
        if (typeof b === "object") {
            this.b = b.rez;
        }
        else {
            this.b = b;
        }
        this.rez = this.a + this.b;
    }
}

class Minus {
    constructor(a, b) {
        if (typeof a === "object") {
            this.a = a.rez;
        }
        else {
        this.a = a;
        }
        if (typeof b === "object") {
            this.b = b.rez;
        }
        else {
            this.b = b;
        }
        this.rez = this.a - this.b;
    }
}

class Log {
    static print(obj) {
        if (typeof obj === "object") {
            console.log(obj.rez);
        }
        else {
            console.log(obj);
        }
    }
}

Log.print(new Plus(new Minus(5, 10), 15)); // 10
Log.print(new Plus(15, new Minus(5, 10))); // 10