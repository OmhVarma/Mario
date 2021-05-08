class Pipe{
    constructor(x,y,width,height){
     var options = {
         isStatic:true
     }

     this.image = loadImage("sprites/pipe.png");
     this.x = x;
     this.y = y;
     this.width = width;
     this.height = height;
     this.body = Bodies.rectangle(x,y,width,height,options);
     World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image,pos.x,pos.y,250,140);
    }
}