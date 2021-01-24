class Mango{
    constructor(x, y, radius){
        var options = {
            isStatic:true,
            restitution: 0,
            friction: 1
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius
        this.image = loadImage("assets/mango.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        // rectMode(CENTRE);
        fill("pink");
        image(this.image, pos.x, pos.y, 100, 100);
        
    }
    }
