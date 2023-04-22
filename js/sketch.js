  let onplay = 1;
  let start = 1;

console.log("By Moreno-Dot");

 function setup() {
    createCanvas(500, 400);

  }
  
  function draw() {
    background(imagemDaEstrada);
    showActor();
    showCar();
    moveCar();
    moveActor();
    verifyCollision();
    showScore();
    addScore();
  }


      function startGame(){
        
          if (onplay == 2){
            onplay--;
            soundBackground.stop();
            velocidadeCarros = [0, 0, 0, 0, 0, 0];
            start--;
            
          }else {
            velocidadeCarros = [2.7, 4.5, 6.1, 4.1, 7.1, 5.2];
            soundBackground.loop();
            onplay++;
            start++;
          }
      }
