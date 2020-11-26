//Create variables here
var dog , foodstock ,database ;
var foodS

function preload()
{
  //load images here
  dogimg = loadImage("images/dogImg.png")
  happydg = loadImage("images/dogImg1.png")
}

function setup() {

  database= firebase.database();
 console.log(database);

  createCanvas(800, 600);
  dog = createSprite(400,350,20,20)
  dog.addImage(dogimg);
  dog.scale=0.125

  foodstock = database.ref('Food');
  foodstock.on("value",readStock)


  
}


function draw() {  
background(46,139,87)
  drawSprites();
  //add styles here
  strokeWeight(4)
  fill("yellow")
  textSize(20)
  text("Note: Press UP_ARROW Key To feed Drago Milk!",300,200)


  
  if(keyDown(UP_ARROW)){
    writeStock(foodS);
   
    dog.addImage(happydg)
    }
    else(
    
      dog.addImage(dogimg)

    )
   

}


function readStock(data){
foodS = data.val();

}
function writeStock(x){
if(x<=0){
  x=0;
}
else{
  x=x-1
}  
database.ref("/").update({
  Food:x
})

}
