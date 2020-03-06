class Particle {
    constructor() {
        this.start = -30;
        this.angle = 60
        this.pos = createVector(width / 4, height / 2);
        this.rays = [];
        this.heading=0;
        for (let a = this.start; a < this.start + this.angle; a += 1) {
            this.rays.push(new Ray(this.pos, radians(a)));
        }
    }

    look(walls) {
        const scene = [];
        for (let i=0;i<this.rays.length;i++) {
            let closest = null;
            let record = Infinity;
            for (let wall of walls) {
                const point = this.rays[i].cast(wall);
                if (point) {
                    let distance = p5.Vector.dist(this.pos, point);
                    const angle =this.rays[i].dir.heading()-this.heading;
                   
                    distance*=cos(angle)
                    if (distance < record) {
                        record = distance;
                        closest = point
                    }
                }
            }
            if (closest) {
                line(this.pos.x, this.pos.y, closest.x, closest.y)
            }
            scene[i]=(record)
        }
        return scene;
    }
    update(x, y) {
        this.pos.x = x%(width/2);
        this.pos.y = y;
    }
    rotate(angle){
        this.heading+=angle;
        let index=0
        for (let a = this.start; a < this.start+this.angle; a += 1) {
            this.rays[index].setAngle(radians(a)+this.heading);
            index++;
        }
    }
    
    move(atm){
        const vel=p5.Vector.fromAngle(this.heading);
        vel.setMag(atm);
        this.pos.add(vel)
    }



    show() {
        fill(255);
        ellipse(this.pos.x, this.pos.y, 4);
        for (let ray of this.rays) {
            ray.show();
        }
    }

}