var play = 1;
var end = 0;
var gmstate = play;
var knife, knifeImg, fruit1, fruit2, fruit3, fruit4, eny1Img, eny2Img, fruitImg1;
var fruitImg2, fruitImg3, fruitImg4;
var fruit1G, fruit2G, fruit3G, fruit4G, enyG;
var gmover,score=0;

function preload() {
  knifeImg = loadImage("sword.png");
  fruitImg1 = loadImage("fruit1.png");
  fruitImg2 = loadImage("fruit2.png");
  fruitImg3 = loadImage("fruit3.png");
  fruitImg4 = loadImage("fruit4.png");
  eny1Img = loadImage("alien1.png");
  eny2Img = loadImage("alien2.png");
  gmover=loadImage("gameover.png");
  

}

function setup() {
  createCanvas(570, 400);
  knife = createSprite(50, 180, 20, 50);
  knife.addImage("sword.png", knifeImg);
  knife.addImage("gm", gmover);

  knife.scale = 0.5;

  enyG = createGroup();
  fruit1G = createGroup();
  fruit2G = createGroup();
  fruit3G = createGroup();
  fruit4G = createGroup();

}

function draw() {

  background(220);
  
  if (gmstate === play)
  {
    knife.y = World.mouseY;
  knife.x = World.mouseX;
  //knife.debug=true;
  knife.setCollider("circle", 0, 0, 40);
 var position = Math.round(random(1, 2));
 
  var rand = Math.round(random(1, 6));
  if (frameCount % 100 === 0) {
    fruit = createSprite(570, 180, 20, 50);
    fruit.y = Math.round(random(10, 390));

    if(position===1)
    {
    fruit.x=370;
    fruit.velocityX=-(7+(score/4));
    }
    else
    {
      if(position===2){
      fruit.x=0;
      fruit.velocityX= (7+(score/4));
      
  //Increase the velocity of fruit after score 4 or 10
      }
    }
    
    fruit.scale = 0.2;
    if (rand === 1)
    {

      fruit.addImage(fruitImg1);
      fruit1G.add(fruit);

    } else if (rand === 2) {
      fruit.addImage(fruitImg2);
      fruit2G.add(fruit);

    } else if (rand === 3) {

      fruit.addImage(fruitImg3);
      fruit3G.add(fruit);
    } else if (rand === 4) {

      fruit.addImage(fruitImg4);
      fruit4G.add(fruit);
    } else if (rand === 5) {

      fruit.addImage(eny1Img);
    
      fruit.scale = 1.1;
      enyG.add(fruit);

    } else {

      fruit.addImage(eny2Img);
      fruit.scale = 1.1;
      enyG.add(fruit);

    }
    //fruit.velocityX=-5;
    
  }

  if (fruit1G.isTouching(knife)) {
    fruit1G.destroyEach();
    score += 5;
  }
  if (fruit2G.isTouching(knife)) {
    fruit2G.destroyEach();
    score += 5;
  }
  if (fruit3G.isTouching(knife)) {
    fruit3G.destroyEach();
    score += 5;
  }
  if (fruit4G.isTouching(knife)) {
    fruit4G.destroyEach();
    score += 5;
  }
  if (enyG.isTouching(knife)){
    enyG.destroyEach();
    //fruit3G.destroyEeach();
   /// fruit4G.destroyEeach();
   // fruit2G.destroyEeach();
   // fruit1G.destroyEeach();
    
    //knife.destroy();
   gmstate=end;
}
              
  drawSprites();
  text("Score "+score,300,50);
  }
if(gmstate===end){
    knife.changeImage("gm",gmover);
 knife.x=200;
  knife.y=200;
  }
  
                
}