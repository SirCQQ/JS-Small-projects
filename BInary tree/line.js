class Linemaker{
    constructor(point,lenght,angle){
        this.point=point;
        this.angle=angle *Math.PI/180;
        this.lenght=lenght;
    }

    getNewPoint(){
        let px=this.point.x+this.lenght;
        let py=this.point.y;
        px = cos((this.angle)) * (px) - sin((this.angle)) * (py) + this.point.x;
        py = sin((this.angle)) * (px) + cos((this.angle)) * (py) + this.point.y;
        return new Linemaker(new Point(this.point.x + px * this.lenght, this.point.y + py * this.lenght),this.lenght/2,this.angle); 
    }
    setPoint(point){
        this.point=point;
    }
    changeAngle(angle)
    {   
      this.angle+=angle*Math.PI/180;
    }
    showLine(){
        let newPoint=this.getNewPoint();
        line(this.point.x,this.point.y,newPoint.point.x,newPoint.point.y);
    }
    devide(){
        let points=[];
        let oldPoint=new Linemaker(this.point,this.lenght,this.angle);
        let oldPoint2=new Linemaker(this.point,this.lenght,this.angle);
        
        oldPoint.changeAngle(Math.PI*28);
        points.push(oldPoint);
        oldPoint2.changeAngle(-Math.PI*28);
        points.push(oldPoint2);
        return points;
    }




    getPoints(level){
        let newPoints=[];
        let devide=this.devide();
        if(level>0){
            devide.forEach(e=>{
                let newE=e.getNewPoint()
                newPoints=newPoints.concat(newE.getPoints(level-1))
            })
    }   
    else{
        return devide
    }
    return newPoints ;
    }

}