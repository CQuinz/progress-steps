const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');
const circles = document.querySelectorAll('.circle');
const progressBar = document.querySelector('#progress');

// *************************************************
// MY VERSION
// let progressPercent = 0;
// let progressStep = 1;

// const enableDisableBtn = ()=>{
  
//   if(progressStep ===1 && progressStep < 4){
//     nextButton.disabled = false;
//     prevButton.disabled = true;
//   }else if(progressStep >1 && progressStep < 4){
//     nextButton.disabled = false;
//     prevButton.disabled = false;
//   }else{
//     nextButton.disabled= true;
//   }
// }

// const goToNextStep = ()=>{

//     circles[progressStep].classList.add('active');
//     progressPercent += 33;
//     progressBar.style.width = `${progressPercent}%`;
//     progressStep++;
//     enableDisableBtn();
//     console.log(progressStep);
// }

// const goToPrevStep = ()=>{
//   progressPercent -=33;
//   progressStep--;
//   circles[progressStep].classList.remove('active');
//   progressBar.style.width = `${progressPercent}%`;
  
//   enableDisableBtn();
//   console.log(progressStep);
// }

// nextButton.addEventListener('click', goToNextStep);
// prevButton.addEventListener('click', goToPrevStep);

// ***************************************************
// AUTHORS VERSION

let currentActive = 1;

nextButton.addEventListener('click', ()=>{
  currentActive++

  if(currentActive > circles.length){
    currentActive = circles.length;
  }

  update();
});

prevButton.addEventListener('click', ()=>{
  currentActive--

  if(currentActive < 1){
    currentActive = 1;
  }

  update();
});

function update(){
  circles.forEach((circle,idx)=>{
    if(idx < currentActive){
      circle.classList.add('active');
    }else{
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');

  progressBar.style.width = ((actives.length - 1)/ (circles.length - 1)) * 100 + '%';

  if(currentActive ===1){
    prevButton.disabled = true;
  }else if(currentActive ===circles.length){
    nextButton.disabled=true;
  }else{
    prevButton.disabled = false;
    nextButton.disabled = false;
  }
}