var home=0;
var instructions=1;
var instructions2=1.5;
var plays=2;
var end=3;
var gamestate=home;

var score=0;
var menu,gada2;
var level;



function preload(){
  airimg=loadImage("air.png");
  arrowimg=loadImage("arrow.png");
  fireballimg = loadAnimation("ball1.png","ball2.png","ball3.png");
  bigmonsterimg= loadImage("bigmonster.png");
  level1background= loadImage("level1.png");
  level2background= loadImage("level2img.png");
  monster2img= loadImage("monster2.png");

  nextlevelimg=loadImage("nextlevel.png");
  pauseimg= loadImage("pause.png");
  resumeimg=loadImage("resume.png")

  sanjeevaniimg=loadImage("sanjeevani.png");
  seaimg= loadImage("seaimg.png");
  seamonsteranime=loadAnimation("octo1.png","octo2.png");

 //seamonsteranime=createImg("seamonster.gif")

  tridentimg=loadImage("trident.png");

  gadaimg= loadImage("gadaimg.png");

  playB = loadImage("playB.png");
  instructionB= loadImage("instructionB.png");

  nextB= loadImage("nextB.png");
  previousB= loadImage("previousB.png");

  mainbackground= loadImage("mainBackground.png");

  hanumanimg = loadImage ("hanumanfinal.png");

 // octourl=loadImage("https://gfycat.com/mintykindlygreatwhiteshark");

 seadragon= loadImage("seadragon.png");

 hanuman2=loadImage("hanuman2.png");

 finalimg=loadImage("finalimg.jpg");

 sitaimg=loadImage("sitapng.png");

}



function setup(){

  createCanvas(400,400);
 
  gadagroup = createGroup();
  monstergroup = createGroup();
  gada2group = createGroup();
  arrowgroup = createGroup();
  monster2group= createGroup();
  fireballgroup= createGroup();
  airgroup =createGroup();
  monster3group= createGroup();
  tridentgroup = createGroup();
 
  templeimage=createSprite(200,280,0,0);
  templeimage.addImage(mainbackground);
  templeimage.scale=1.5;
 
  jungle=createSprite(200,200,20,20);
  jungle.addImage(level1background);
  jungle.scale=2.1;
  jungle.velocityX=-5;
  jungle.visible=false;
 
 
  nightbackground=createSprite(200,200,400,100);
  nightbackground.addImage(level2background);
  nightbackground.scale=0.98;
  nightbackground.visible=false;
  nightbackground.velocityX=-5;
 
  playbutton=createSprite(200,100,0,0);
  playbutton.addImage(playB);
  
 
 menu=createSprite(200,250,0,0);
 menu.addImage(instructionB);
 
 backbutton=createSprite(40,30,0,0);
 backbutton.addImage(previousB);
 backbutton.scale=0.3;
 
   
 nextbutton=createSprite(350,360,0,0);
 nextbutton.addImage(nextB);
 nextbutton.scale=0.2;
 
  ground=createSprite(200,370,400,30);
  ground.shapeColor="seagreen";
 
 
 
  bigmonster= createSprite(400,250,30,30);
  bigmonster.addImage(bigmonsterimg);
  bigmonster.visible=false;
 
 
 pause=createSprite(30,350);
 pause.addImage(pauseimg);
 pause.scale=0.3;
 pause.visible=false;
 
 resume=createSprite(50,80);
 resume.addImage(resumeimg);
 resume.scale=0.3;
 resume.visible=false;
 
 sea= createSprite(200,200,10,10);
 sea.addImage(seaimg);
 sea.velocityX=-5;
 sea.visible=false;
      
      
 sanjeevani=createSprite(200,100);
 sanjeevani.addImage(sanjeevaniimg);
 sanjeevani.setCollider("circle",0,0,150);
 sanjeevani.visible=false; 
 
 hanuman=createSprite(90,200,20,20);
 hanuman.addImage(hanumanimg);
 hanuman.scale=1;
 hanuman.setCollider("circle",0,0,30);

  sita=createSprite(displayWidth/2,displayHeight/2);
  sita.addImage(sitaimg);


 nextlevel=createSprite(200,300,0,0);
 nextlevel.addImage(nextlevelimg);
 nextlevel.scale=1.5;
 nextlevel.visible=false;
 
 }

 
 function draw(){
  background("white");


  //home page starts 
 if(gamestate==home) {
      
      templeimage.visible=true;
      playbutton.visible=true;
      menu.visible=true;

      jungle.visible=false;
      hanuman.visible=false;
      ground.visible=false;
      pause.visible=false;
      resume.visible=false;

      backbutton.visible=false;
      nextbutton.visible=false;
         
      if(mousePressedOver(playbutton)) {
        gamestate="level1";
        //playbutton initiation
      }
      
      if(mousePressedOver(menu)) {
        gamestate=instructions;
      }
  
     // console.log("test");
      drawSprites();

  }


  if(gamestate == instructions ) {
    
    pause.visible=false;
    resume.visible=false;
    playbutton.visible=false;
    hanuman.visible=false;
    menu.visible=false;
    templeimage.visible=false;
    backbutton.visible=false;
    nextbutton.visible=true;
    ground.visible=false;
    
    
    fill("red");
    textSize(20);
    text("*Press play to start game.",20,100);
    text("*Press up and down arrow to ",20,130);
    text("move Hanumanji up and down.",25,155);
    text("*Press spacebar to shoot gada at",20,185);
    text("enemy.",25,210);
    text("*Score 3000 to go to the next level",20,250);
    text("*At level 2 press A key to shoot air",20,280);
    text("and destroy the fireball.",20,310);
    
   // text("*Collect gadas coming in your",20,290);
   // text("way to shoot gadas.",25,290);
    
   if(mousePressedOver(nextbutton) ) {
      gamestate=instructions2;
      nextbutton.visible=false;
      backbutton.visible=true;
   }

   drawSprites();
    
  }


  if(gamestate==instructions2 ) {
    fill("red");
    textSize(25);
    text("hello",200,200);
    backbutton.visible=true;
    ground.visible=false;
    console.log(gamestate);

   
    
    drawSprites();
    console.log(gamestate);
}


if(mousePressedOver(backbutton) && gamestate == instructions2 ) {
  gamestate=home;
  backbutton.visible=false;
  nextbutton.visible=false;
  console.log(gamestate);

}


if(gamestate === "level1") {
   
  score=score+Math.round(World.frameCount/150);
  //console.log(World.frameRate);
 
  menu.visible=false;
  templeimage.visible=false;
  jungle.visible=true;
  hanuman.visible=true;
  ground.visible=false;
  playbutton.visible=false;
  pause.visible=true;
  resume.visible=true;

 
 //reset the background
 if(jungle.x<130) {
   jungle.x=jungle.width/1;  
 }
 
 if(keyDown("up")) {
   hanuman.y=hanuman.y-10;
 }

 if(keyDown("down")) {
   hanuman.y=hanuman.y+10;
 }
 
 spawncyclops();

 
 if(keyDown("space") ) {
   spawngada();
   
 }
 
 hanuman.collide(ground);
 

 if(monstergroup.isTouching(gadagroup)) {
     gadagroup.destroyEach();
     monstergroup.destroyEach();
     
 }
 
  if(monstergroup.isTouching(hanuman)){
   gamestate=end;
   level="first";
 }
 
 if(arrowgroup.isTouching(hanuman)){
   arrowgroup.setVelocityXEach(0);
   gamestate=end;
   level="first";
 }
 
 if(gadagroup.isTouching(arrowgroup)){
   arrowgroup.destroyEach();
   gadagroup.destroyEach();
 }
 

 
 
 drawSprites();
 
 fill("yellow");
 textSize(20);
 text("score:" + score,270,30);


 
 if(score > 130){
   bigmonster.visible=true;
   bigmonster.velocityX=-5;
   bigmonster.depth=gadagroup.depth;
  
   //console.log(bigmonster.velocityY);
   
   if(bigmonster.isTouching(hanuman)){
    // bigmonster.velocityY=0;
     gamestate=end;
     level="first";
     console.log(level);
   }
 }
 if(gadagroup.isTouching(bigmonster)){
    bigmonster.destroy();
    nextlevel.visible=true;
    
 }

 if(mousePressedOver(nextlevel)){
   gamestate="level2";
   
 }
 
 if(mousePressedOver(pause)){
   gamestate="pause";
   level="first";
 }

}


 
if(gamestate=="level2"){
  sea.visible=true; 
  hanuman.visible=true;
  nextlevel.visible=false;

  monstergroup.destroyEach();

  if(sea.x<0){
    sea.x=200;
  }
  
   if(keyDown("up")) {
      hanuman.y=hanuman.y-10;
    }

    if(keyDown("down")) {
      hanuman.y=hanuman.y+10;
    }

  spawnseamonster();

  if(keyDown("a")){
    spawntrident()
  }

  if(tridentgroup.isTouching(monster3group)){
    gamestate="level2.1";
    
  }
  

  if(hanuman.isTouching(monster3group)){
    level="second";
    gamestate="end";
    
  }

  drawSprites();
  
}


if(gamestate== "level2.1"){
  sea.velocityX=0;
  hanuman.addImage(hanuman2);
  hanuman.x=200;
  hanuman.y=200;
  monster3group.setVelocityXEach(0);
  tridentgroup.setVelocityXEach(0);

  nextlevel.x=350;
  nextlevel.y=50;
  nextlevel.scale=0.5;
  nextlevel.visible=true;
  console.log("level2.1");

  if(mousePressedOver(nextlevel) ){
    gamestate=="level2.2"; 
    console.log("test");
  }

  drawSprites();

}

if(gamestate== "level2.2"){
  console.log("level2.2");
  sea.velocityX=0;
  sita.visible=true;
  sita.x=200;
  sita.y=200;
  sita.scale=1.8;
  monster3group.setVelocityXEach(0);
  monster3group.destroyEach();
  tridentgroup.setVelocityXEach(0);
  tridentgroup.destroyEach();

 // nextlevel.visible=true;

  drawSprites();
}


if(gamestate == end ){
  console.log("end");
  // pause.visible=true;
  // resume.visible=true;

  if(level=="first"){
    jungle.velocityX=0
    monstergroup.setVelocityXEach(0);
    arrowgroup.destroyEach();
  }

 else if(level == "second"){
  sea.velocityX=0;
  monster3group.setVelocityXEach(0);
 }
 else{
   console.log("error");
 }
  
  drawSprites();
}




 }
//function draw ends here

function spawncyclops() {
  if(World.frameCount%150==0) {
    var cyclops=createSprite(400,random(200,300),0,0);
    //cyclops.addImage("download (1).jpg_1");
    cyclops.scale=0.4;
    cyclops.velocityX=-5;
   // cyclops.debug=true;
    cyclops.setCollider("circle",0,0,120);
    cyclops.depth=hanuman.depth;
    hanuman.depth+=1;
    
    var arrow=createSprite(400,cyclops.y);
    arrow.addImage(arrowimg);
    arrow.scale=0.3;
    arrow.velocityX=-10;
    //arrow.debug=true;
    arrow.setCollider("rectangle",0,0, 50,50);
    arrowgroup.add(arrow);
    monstergroup.add(cyclops);
  }
}

function spawngada() {
  var gada=createSprite(90,hanuman.y,0,0);
  gada.addImage(gadaimg);
  gada.scale=0.35;
  gada.velocityX=5;
  gada.lifetime=90;
 // gada.debug=true;
  gada.setCollider("rectangle",0,0,gada.width/4,gada.height);
  gadagroup.add(gada);

}

function spawnseamonster(){
  if(World.frameCount%150==0) {
   var monster3=createSprite(400,random(200,300),0,0);
   monster3.addImage(seadragon);
   monster3.scale=0.25;
   monster3.setLifetime=100;
   monster3.velocityX=-5;
  // monster3.debug=true;
   monster3.setCollider("rectangle",0,0,500,1000);

   hanuman.depth=monster3.depth;

   monster3group.add(monster3);
  // monster3.addAnimation("seamonster",seamonsteranime);
   
  //seamonsteranime=createImg("seamonster.gif",50,300);
  //seamonsteranime.position(random(100,300),monster3.y);

  }
}

function spawntrident(){
  
  var trident=createSprite(hanuman.x,hanuman.y,0,0);
  trident.addImage(tridentimg);
  trident.scale=0.45;
  trident.velocityX=10;
  //trident.debug=true;

  hanuman.depth=trident.depth;

  tridentgroup.add(trident);

}


//gamestate end not working for level 2

// level 2.1 to 2.2 jump not working


