var sea, seaImage;
var ship, ship_bouncing, edges;


function preload(){
  ship_bouncing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(2000,1000);
  
  //creating sea image
  sea = createSprite(1000, 500, 2000, 1000);
  sea.addImage("infinteMovement", seaImage);

  // creating ship
  ship = createSprite(1000,500,300,750);
  ship.addAnimation("bouncing", ship_bouncing);
  
  edges = createEdgeSprites();
  
  //adding scale and position to ship
  ship.scale = 1;
  ship.x = 1000;
}


function draw() {
  //set background color 
  background("turquoise");
  
  //logging the y position of the ship
  console.log(ship.y)
  
  // //jump when space key is pressed
  // if(keyDown("space")){
  //   ship.velocityY = 0;
  // }
  
  // ship.velocityY = ship.velocityY + 0;

  //giving sea velocity
  sea.velocityX = -4;

  if(sea.x < 0) {
    sea.x = sea.width/2;
  }
  
  //ship.collide(sea);

  drawSprites();
}