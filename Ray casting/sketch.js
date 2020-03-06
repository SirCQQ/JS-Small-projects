let walls=[];
let particle;
const width=800;
const height=400;
const sceneW=width/2;
const sceneH=height;

function setup() {
  createCanvas(width,height);
  wall=new Bound(300,100,300,300);
  // ray= new Ray(100,200);
  for(let i=0; i<4;i++){
    let x1=random(width/2);
    let y1=random(width/2);
    const x2=random(height);
    const y2=random(height);
    walls.push(new Bound(x1,y1,x2,y2));
  }
  walls.push(new Bound(0,0,0,width/2));
  walls.push(new Bound(0,width/2,height,width/2));
  walls.push(new Bound(height,0,0,0));
  walls.push(new Bound(height,width/2,height,0));
  particle= new Particle();
}

function draw() {
  background(0);
  for(let wall of walls){
    wall.show(); 
    }
  
    if(keyIsDown(LEFT_ARROW)){
      particle.rotate(-0.1)
    }
    if(keyIsDown(RIGHT_ARROW)){
      particle.rotate(0.1)
    }
    if(keyIsDown(UP_ARROW)){
      particle.move(2)
    }
  
    if(keyIsDown(DOWN_ARROW)){
      particle.move(-2)
    }



  particle.show();
  const scene=particle.look(walls);
  const w=sceneW/scene.length;
  push()
  translate(sceneW,0)
  for (let i=0;i<scene.length;i++){
    const sq=scene[i]*scene[i];
    const wSq=sceneW*sceneW;
    const b= map(sq,0,wSq,255,0)
    const h=map(scene[i],0,sceneW,sceneH,0)
    noStroke()
    fill(b);  
    rectMode(CENTER);
    rect(i*w+w/2,sceneH/2,w+1,h);
  }
  pop()
  // particle.update(mouseX,mouseY);

}




