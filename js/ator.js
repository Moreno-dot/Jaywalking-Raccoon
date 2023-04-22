//ator
let xAtor = 85;
let yAtor = 366;
let collision = false;
let playerScore = 0;

  function showActor(){
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
  }

  function moveActor(){
    if (start == 2) {
    if (keyIsDown(UP_ARROW) || keyIsDown(87)){
      yAtor -= 2;
    } if (keyIsDown(DOWN_ARROW) || keyIsDown(83)){
      if (canMoveDown()){
      yAtor += 2;
      }
    } if (keyIsDown(LEFT_ARROW) || keyIsDown(65)){
      xAtor -= 2;
    } if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)){
      xAtor += 2;
    }
  } 
  }

  function verifyCollision(){
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (let i = 0; i < imagemCarros.length; i++){
      collision = collideRectCircle(xCarros[i], yCarros[i], 50, 30, xAtor, yAtor, 30);
      if (collision) {
        LoweringTheScore();
        backToStart();
        soundCollision.play();
    }
  }
}

  function backToStart(){
    xAtor = 100;
    yAtor = 366;
  }

  function showScore(){
    textAlign(CENTER);
    textSize(25);
    fill(color(255, 110, 9));
    text(playerScore, width / 5, 27);
  }

  function addScore(){
    if (yAtor <= 15){
      playerScore+= 1;
      backToStart();
      soundScore.play();
    }
  }

  function LoweringTheScore(){
    if (playerScore > 0){
      playerScore -= 1;
    }
  }

  function canMoveDown(){
    return yAtor < 366;
  }