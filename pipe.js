function Pipe(){
    this.top = random(200);
    this.bottom = random(200);
    this.x=400;
    this.w=20;
    this.speed =2;
    this.highlight = false;

    this.show = function(){
        fill(0,255,0);
        if(this.highlight){
            fill(255,0,0);
        }
        rect(this.x,0,this.w,this.top);
        rect(this.x,400-this.bottom,this.w,this.bottom); 
    }

    this.update = function(){
        this.x -= this.speed;
    }

    this.offscreen = function(){
        if(this.x<-20){
            return true;
        }
        return false;
    }

    this.hits = function(bird){
        if(bird.y<this.top || bird.y>400-this.bottom){
        if(bird.x > this.x && bird.x < this.x + this.w){
            this.highlight=true;
            return true; 
        }}
        this.highlight=false;
        return false;
    }
}