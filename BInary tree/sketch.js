const width = 400;
const height = 400;
let start = new Linemaker(new Point(100, 100), 0.3, Math.PI*28);
let x1 = 0;
let y1 =0;
// let angle = Math.PI/180;
let angle = 1;
let t = 0;
function setup() {
  // translate(-1,1)
  createCanvas(width, height);
  background(0);
  stroke(255);
  start.showLine();
  let newPoint=start.getNewPoint()
  for(let i=0;i<4;i++){
    let points=newPoint.getPoints(i)
  points.forEach(line=>{
      line.showLine();
    })}
  }
  
  function draw() {
    // translate(width/2,height/2);
    stroke(255);
  // point(x1, y1);
  // angle+=1;
  // let x = 100;
  // let y = 100;
  // console.log((angle*Math.PI/180))
  // let s = sin(angle*Math.PI/180);
  // let c = cos(angle*Math.PI/180);

  // x -= x1;
  // y -= y1;
  // let xnew = x * c - y * s;
  // let ynew = x * s + y * c;

  // x = xnew + x1;
  // y = ynew + y1;
  // point(x, y)

}




