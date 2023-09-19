//prendo il container div
const button =document.getElementById('button');
const container = document.querySelector('.container');



button.addEventListener('click', function(){
  reset();
  creaQuadrato();
  
});

function creaQuadrato(){

  for(let i=1; i <= 100; i++){
      

    const square = document.createElement('div');
    square.className ='square';

    square._squareID = i;
    
    square.addEventListener('click', function(){
      //forse da cambiare il add
      console.log(square._squareID);
      this.classList.toggle('clicked');
      

    });
    container.append(square);

  }

}


function reset(){

  container.innerHTML = '';
}