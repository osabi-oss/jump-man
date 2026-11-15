let offset = 0;
let obstacles = []
let x_positionplayer;

function setup() {
  createCanvas(400, windowHeight);
  for (let i = 0; i<20; i++) {
    obstacles.push({
      x_offset: Math.random() * 400,
      y_offset: i * 50
    })
  }
  x_positionplayer=width/2
}

function draw() {
  background(52,207,235);
   circle(x_positionplayer, 500, 25);
   if (keyIsDown(LEFT_ARROW))
    x_positionplayer-=2.00
  if (keyIsDown(RIGHT_ARROW))
    x_positionplayer+=2.00
  for (let i = 0; i<20; i++) {
    const y_position = obstacles[i].y_offset+offset
    const x_position = obstacles[i].x_offset
    rect(x_position,y_position,50,10)
    if (y_position > windowHeight) {
      obstacles[i].y_offset-= windowHeight
     
    }
  }
offset +=1.67
}



