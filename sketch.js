var bird;
var pipes = [];
var score = 0;

var scoreboard = function(score){
    
}

function setup() {
  createCanvas(400, 400);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(0);

    for(var i = 0 ;i<pipes.length;i++){
    pipes[i].show();
    pipes[i].update();score += 0.01;
    if(pipes[i].hits(bird)){
        window.alert("Game Over!\n   Score: "+ score);
        document.location.reload();
    }

    if(pipes[i].offscreen()){
        pipes.splice(i,1);
     }
    }
   
  bird.update();
  bird.show();

  if(frameCount % 100 == 0 ){
    pipes.push(new Pipe());
  
    }
}

function keyPressed() {
  if(key == 'w'){
    bird.up(); 
  }
}
