function setup()
 { createCanvas(400, 400); 
box=createSprite(200,200,30,30);
}
  function draw() 
  { background("green"); 
  if(keyDown("right")){
    box.position.x=box.position.x+5
  }
  drawSprites()
}