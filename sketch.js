

var naveImg, nave;
var alienigena1, alienigena2, alienigena3, alienigena4;
var meteoro1, meteoro2;
var estrelas;
var satel;
var back;
var ba;
var core, trofel;
var vida = 50;
var score = 0;
var groupM, groupA1, groupA2, groupA3, groupA4, groupE, groupB;
var stage = 0;


var engine, world;

function preload() {
  naveImg = loadImage("nave.png");
  alienigena1 = loadImage("Alienigena verde.png");
  alienigena2 = loadImage("Alienigena roxo.png");
  alienigena3 = loadImage("Alienigena azul.png");
  alienigena4 = loadImage("Alienigena cinza.png");
  estrelas = loadImage("estrela.png");
  meteoro1 = loadImage("meteoro.png");
  meteoro2 = loadImage("meteoro 2.png");
  satel = loadImage("satellite.png");
  back = loadImage("background.jpg");
  core = loadImage("vida.png");
  trofel = loadImage("trofel.png");

}

function setup() {
  createCanvas(600,800);

   ba = createSprite(300,500);
  ba.addImage("back",back);
  ba.scale = 1.5;
  nave = createSprite(300,600, 0, 0);
  nave.addImage("naveImg",naveImg);
  nave.scale = 0.15;


  groupA1 = new Group();
  groupA2 = new Group();
  groupA3 = new Group();
  groupA4 = new Group();
  groupM = new Group();
  groupE = new Group();
  groupB = new Group();


 


}

function draw() {
  background(189);
  if(stage == 0){
     move();
     if(keyDown(UP_ARROW)){
       ba.y += 5;
       if(ba.y>1000){
         ba.y = 500;
       }
       meteoro();
       alien();
       estrela();
    }
    if(nave.isTouching(groupM)){
      vida -= 1;
    }
    if(nave.isTouching(groupA1)){
      vida += 5;
    }
    if(nave.isTouching(groupA2)){
      score += 3;
    }
    if(nave.isTouching(groupA3,t)){
      groupB.setVelocityYEach(-15);
    }
    if(nave.isTouching(groupA4)){
      groupM.destroyEach();

    }
    if(nave.isTouching(groupE)){
      score += 10;
    }
   if(score>5000){
    stage = 1;
    groupA1.destroyEach();
    groupA2.destroyEach();
    groupA3.destroyEach();
    groupA4.destroyEach();
    groupM.destroyEach();
    groupE.destroyEach();
    groupB.destroyEach();
    
   }
   if(vida<=0){
    stage = 2;
    groupA1.destroyEach();
    groupA2.destroyEach();
    groupA3.destroyEach();
    groupA4.destroyEach();
    groupM.destroyEach();
    groupE.destroyEach();
    groupB.destroyEach();
   }

  }

  
 tiro();

 

 drawSprites();
  if(stage == 1){
    textSize(25);
    text("Você chegou ao seu destino!",200, 400);
  }
  if(stage == 2){
    textSize(25);
    text("Você explodiu.", 200, 400);
  }
 image(core, 30,30, 25,25);
 image(trofel, 30,60, 25,25);
 textSize(20);
 fill("red");
 text(vida,60,50);
 fill("yellow");
 text(score,60,80)
}

function move(){

  if(keyDown(LEFT_ARROW)){
     nave.x -= 5;
  }

  if(keyDown(RIGHT_ARROW)){
    nave.x += 5;
  }
}

function meteoro(){

  if(frameCount%80==0){
   var me = createSprite(random(100,500), -50);
   me.velocityY = 5;
   switch(Math.round(random(1,2))){
     case 1: me.addImage("meteoro", meteoro1); 
     me.scale = 0.12;
     break;
     case 2: me.addImage("meteoro", meteoro2); 
     me.scale = 0.20;
     break;
     case 2: me.addImage("meteoro", meteoro2); 
     me.scale = 0.20;
     break;
     
    
   }
   groupM.add(me);
   
  }
}

function alien(){

  if(frameCount%200==0){
   var A = createSprite(random(100,500), -50);
   A.velocityY = 5;
   switch(Math.round(random(1,4))){

     case 1: A.addImage("alienigena", alienigena1); 
     groupA1.add(A);
     A.scale = 0.10;
     break;

     case 2: A.addImage("alienigena", alienigena2); 
     groupA2.add(A);
     A.scale = 0.10;
     break;

     case 3: A.addImage("alienigena", alienigena3); 
     groupA3.add(A);
     A.scale = 0.10;
     break;

     case 4: A.addImage("alienigena", alienigena4); 
     groupA4.add(A);
     A.scale = 0.10;
     break;
    
   }

   
  }
}

function estrela(){

  if(frameCount%100==0){
   var es = createSprite(random(100,500), -50);
   es.velocityY = 5;
   groupE.add(es);
   es.addImage("estrela", estrelas);
   es.scale = 0.05;
   
  }
}

function tiro(){
  if(frameCount%2==0){

   if(keyWentDown("space")){

     fill("orange");
     var tiros = createSprite(nave.x,nave.y -45,5,10);
     tiros.tint = "orange";
     tiros.velocityY = -5;
     groupB.add(tiros);
   
    }
  }
  
}

function t(nave,me){

 me.remove();

}


