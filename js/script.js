//prendo il container div
const button =document.getElementById('button');
const container = document.querySelector('.container');



button.addEventListener('click', function(){
  reset();
  creaQuadrato();
  
});

function creaQuadrato(){

  const bomberandom = random();
  console.log(bomberandom);
  for(let i=1; i <= 100; i++){

    
    

    const square = document.createElement('div');
    square.className ='square';

    square._squareID = i;
    
    square.addEventListener('click', function(){

      if(bomberandom.includes(i)){

        this.classList.add('bombe')
        console.log(this.classList.add('bombe'))
      }else{
        this.classList.toggle('clicked');

      }


      //forse da cambiare il add
      console.log(square._squareID);
      

      
    });
    container.append(square);

  }

}


function random(){

  let contenitoreRandom = [];

  for(let i= 0 ; i < 16; i++){

    const numeroRandom = Math.ceil((Math.random()) * 100);

    contenitoreRandom.push(numeroRandom)
  }
  return contenitoreRandom;
  
}


function reset(){

  container.innerHTML = '';
}