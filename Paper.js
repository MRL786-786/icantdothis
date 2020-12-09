class Paper {  
    constructor(x, y, r){
        var options = {
        restitution:0.8,
            friction:2.0,
            density:1.2,
            isStatic : false,
        }
         this.x=x;
         this.y=y;
         this.r=r;
        this.body = Bodies.circle(x, y, r, options);
	    World.add(world, this.body);
       
        
   }
   display(){
    fill("Yellow");
    ellipseMode(CENTER);
    ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
   }
}