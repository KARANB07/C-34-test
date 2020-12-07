class ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        
        this.height=height;
        this.width=width;
        this.body=Bodies.rectangle(this.x,this.y,width,height,options)
        World.add(world,this.body);

    }
    display(){
        rectMode(CENTER)
        fill(85,85,85)
        rect(x,y,this.width,this.height)
    }
}