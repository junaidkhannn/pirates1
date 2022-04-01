
class Tower {
    constructor(x, y, width, height) {
      var options = {
//set the static body(challenge 2)
    isStatic:true 
      };
        //Load the image of the tower(challenge 5)
this.width = width;
    this.height = height;
    this.image=loadImage("assets/tower.png")
      //write the instruction to create a rectangular tower body(challenge1)
      this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
      //add the option inside the rectangular body(challenge 2)
      //Add this object to the World(challenge 2)
    }
display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    
    imageMode(CENTER);
            //change the rect as image(challenge 5)
image(this.image,pos.x,pos.y,this.width,this.height)
//display the rect function (challenge 3)
  
  }
}
