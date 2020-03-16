class Snake{
      constructor(size){
          this.size=size
        this.reset()
      }
      show(){
          for(let i=0; i<this.total;i++){
              stroke(255)
              fill(255)
              rect(this.tail[i].x*this.size+1,this.tail[i].y*this.size+1,this.size-2,this.size-2);
            //   text(i,this.tail[i].x*20+1,this.tail[i].y*20+1)
          }
      }
      move(){
        let a=new Point((this.tail[this.total-1].x+this.direction.x)%20,(this.tail[this.total-1].y+this.direction.y)%20)
        for(let i=0;i<this.total;i++){
         
            if(this.tail[i].x===a.x&&this.tail[i].y===a.y){
                this.reset();
                break
            }
        }
        for(let i=0;i<this.total-1;i++){
            // console.log(i,this.tail[i])
            this.tail[i]=this.tail[i+1];
        }
        this.tail[this.total-1]=new Point((this.tail[this.total-1].x+this.direction.x+20)%20,(this.tail[this.total-1].y+this.direction.y+20)%20)
      }
      reset(){
        this.tail=[new Point(9,10),new Point(10,10),new Point(11,10),new Point(12,10),new Point(13,10),new Point(14,10),];
        this.direction={x:1,y:0}
        this.total=this.tail.length;
      }


      setDir(x,y){
        this.direction.x=x;
        this.direction.y=y;
      }
      eat(f){
          if(this.tail[this.total-1].x===f.x&&this.tail[this.total-1].y===f.y){
              console.log("EAT")
              this.total++;
                this.tail.push(new Point(f.x,f.y));
                console.log(this.tail)
                f.pick(this)
          }
      }
    }

class Fruit{
    constructor(s,size) {
        this.size=size
        this.pick(s)
    }
    pick(f){
        let a=true
        while(a){
            a=false
        this.x=Math.floor((Math.random()*10))%20;
        this.y=Math.floor((Math.random()*10))%20;
        for(let i=0;i<f.tail.length;i++){
            if(this.x===f.tail[i].x&&this.y===f.tail[i].y){
                a=true;
                break;
            }
        }
    }
}
    show(){
        // console.log(this.x,this.y)
        stroke(255,0,0);
        fill(255,0,0);
        rect(this.x*this.size+1,this.y*this.size+1,this.size-2,this.size-2);
    }
    
}