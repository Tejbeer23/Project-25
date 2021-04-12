class Paper{
    constructor(x,y,r){
        var options ={
        restitution:0.3,
        friction:0.5,
        density:1.2,
        isStatic:false
        }
        this.x=x;
		this.y=y;
		this.r=r
        this.body = Bodies.circle(this.x, this.y, this.r/2, options)
        World.add(world,this.body);
        this.image = loadImage("paper.png",this.x , this.y)
    }

    display() { 
        var paperpos=this.body.position; 
        image(this.image,this.x , this.y);
        push() 
        translate(paperpos.x, paperpos.y);
         rectMode(CENTER)
          strokeWeight(3);
          fill(255,0,255) 
          ellipse(0,0,this.r, this.r);
          pop()
         } 
        }

