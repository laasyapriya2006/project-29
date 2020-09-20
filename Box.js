class Box{
    constructor(x, y,color) {
        var options = {
            'isStatic': false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 40;
        this.color = color;
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(1.5);
        stroke("black");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
        
      }
} 