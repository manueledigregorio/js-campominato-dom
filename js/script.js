//prendo il container div
const button =document.getElementById('button');
const container = document.querySelector('.container');



button.addEventListener('click', function(){
  reset();
  creaQuadrato();
  
});

const bomberandom = random();
console.log(bomberandom);

function creaQuadrato(){

 
  for(let i=1; i <= 100; i++){

    const square = document.createElement('div');
    square.className ='square';

    square._squareID = i;
    square.addEventListener('click',funzioneDaRimuovere)
    square.addEventListener('click', function(){

      if(bomberandom.includes(i)){

        this.classList.add('bombe')
        console.log(this.classList.add('bombe'))
        mostraBombe();
      }else{
        this.classList.toggle('clicked');

      }
      console.log(square._squareID);
    });
    container.append(square);

  }


}


function funzioneDaRimuovere(){
  this.removeEventListener('click',funzioneDaRimuovere)
}


function mostraBombe() {
  const squares = document.getElementsByClassName('square');
  for (let i = 0; i < squares.length; i++) {
    if (bomberandom.includes(squares[i]._squareID)) {
      squares[i].classList.add('bombe');
    }
  }
  alert('Hai perso!');
  fineDelGioco(false); // Passa 'false' per indicare che il giocatore ha perso
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