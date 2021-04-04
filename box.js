class Box{
    constructor(x,y,width,height){
       
    var myOpt={
        restitution:0.8,
        friction:0.3,
        density:1,
        isStatic : false
    }

        this.body=Bodies.rectangle(x,y,width,height,myOpt);
        this.width=width;
        this.height=height;
        this.visiblity=255;
        World.add(world,this.body)


    }

    display(){

        
        var pos=this.body.position;
        var angle=this.body.angle;

        if(this.body.speed<3){
           push();
        translate(pos.x,pos.y);
        rotate(angle);


        fill("coral");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        
       
        pop();

        }
        else{
            World.remove(world,this.body)
        }

        
    }

}