  //Carros
  let yCarros = [40, 96, 150, 210, 270, 318];
  let xCarros = [600, 600, 600, 600, 600, 600];
  let velocidadeCarros = [0, 0, 0, 0, 0, 0];

  function showCar(){
    for(let i = 0; i < imagemCarros.length; i++){
      image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
    }
  }

  function moveCar(){
    for( let i = 0; i < imagemCarros.length; i++){
      if (xCarros[i] < -50) {
        xCarros[i] = 600;
      } else {
        xCarros[i] -= velocidadeCarros[i];
      } 
    }
  }

