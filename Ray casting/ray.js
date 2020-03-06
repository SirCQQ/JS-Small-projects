class Ray {
    constructor(pos,angle) {
        this.pos =pos;
        this.dir = p5.Vector.fromAngle(angle)
    }
    lookAt(x, y) {
        this.dir.x = x - this.pos.x;
        this.dir.y = y - this.pos.y;
        this.dir.normalize();
    }
    show() {
        stroke(255);
        // push();
        // // translate(this.pos.x, this.pos.y);
        // pop();
    }

    setAngle(angle){
        this.dir=p5.Vector.fromAngle(angle)
    }
    cast(wall) {
        let x1 = wall.a.x;
        let y1 = wall.a.y;
        let x2 = wall.b.x;
        let y2 = wall.b.y;

        let x3 = this.pos.x;
        let y3 = this.pos.y;
        let x4 = this.pos.x + this.dir.x;
        let y4 = this.pos.y + this.dir.y;

        const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

        if (den === 0) {
            return;
        }
        const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
        const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;
        if (t > 0 && t < 1 && u > 0) {
            return createVector((x1+t*(x2-x1)),(y1+t*(y2-y1)));
            // return true;
        }
        return;
    }

}