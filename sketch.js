var dog, dog1;
var happyDog, happyDog1;
var database;
var foodS;
var foodStock;


function preload()
{
	dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);

  dog1 = createSprite(250, 350, 50, 50);
  dog1.addImage(dog);
  dog1.scale = 0.2;

  //happyDog1 = createSprite(250, 350, 50, 50);

  foodStock=database.ref('Food');
  foodStock.on("value", function(data){
     foodS = data.val();
  });
}


function draw() {  

  background(46, 139, 87);

  if(keyWentUp(UP_ARROW)){
    writeStock(foodS);
    dog1.addImage(happyDog);
    dog1.scale = 0.5;
  }

  
  drawSprites();

 
  textSize(18);
  fill("white");
  text("Food remaing:" + foodS, 150, 250);

  text("Note : Press UP_ARROW Key To feed Drago Milk", 50, 50);
}

function writeStock(x){

  if(x<=0){
    x=0;
   }else{
    x=x-1;
   }

  database.ref('/').update({
    Food : x
  })
}








