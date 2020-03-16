class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
};

class Square {
    constructor(point, height) {
        this.point = point;
        this.height = height;
    }

    show() {
        // this.point.x+=;
        // rect(this.point.y+10,this.point.x,this.height)
        let replace=0;
        line(this.point.x,this.point.y,this.point.x+this.height,this.point.y)
        line(this.point.x+this.height,this.point.y,this.point.x+this.height+replace,this.point.y+this.height)
        line(this.point.x+this.height+replace,this.point.y+this.height,this.point.x+replace,this.point.y+this.height)
        line(this.point.x+replace,this.point.y+this.height,this.point.x,this.point.y)
    }

    devide() {
        let points = [];
        // let a=0;
        let newHeight = this.height / 3;
        for (let i = 0; i < 9; i++) {
            let x = this.point.x + (newHeight * (i % 3));
            let y = this.point.y + (newHeight * int(i / 3));
            points.push(new Square(new Point(x, y), newHeight))
        }
        return points;
    }

    showDevided(level) {
        if (level > 0) {
            let sq = this.devide();
            for (let i=0;i<9;i++){
                if(i===4){
                    fill(255,0,0);
                    sq[i].show()
                    fill(255);
                }
             else{
                sq[i].showDevided(level-1);
            }
            }
        }
    }
}
