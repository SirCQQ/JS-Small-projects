let width = 400;
let height = 400;
let snake;
let count=0
let f;
function setup() {
  createCanvas(width, height)
  stroke(255)
  snake = new Snake(10)
  snake.show();
  // background(0);
  snake.show();
  f=new Fruit(snake,10);
  
}

function draw() {
  background(0);
  f.show();
if(count%10===0)
{
  snake.move();
  snake.eat(f);
}  snake.show();
  count++;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0)
  }
  if (keyCode === RIGHT_ARROW) {
    snake.setDir(1,0)
  }
  if (keyCode === DOWN_ARROW) {
    snake.setDir(0,1)
  }
  if (keyCode === UP_ARROW) {
    snake.setDir(0,-1)
  }
}




