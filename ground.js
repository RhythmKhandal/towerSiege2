class Ground{
    constructor(x,y,width,height){
    var myOpt={
        isStatic : true
    }

        this.body=Bodies.rectangle(x,y,width,height,myOpt);
        this.width=width;
        this.height=height;
       
        World.add(world,this.body)


    }

    display(){
        var pos=this.body.position;
        fill("aqua");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);


    }

}