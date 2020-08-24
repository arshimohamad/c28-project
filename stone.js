class Stone{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0,
            friction:1.0,
            density:1.2
        }
        this.body= Bodies.circle(x,y,r,options);
        this.radius=r;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        ellipse(this.image,0,0, 2*this.radius, 2*this.radius);
        pop()

    }
    }
