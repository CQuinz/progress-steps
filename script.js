const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');
const circles = document.querySelectorAll('.circle');
const progressBar = document.querySelector('#progress');

let progressPercent =33;

let progressStep = 1;


const checkProgressStep = ()=>{
  
  if(progressStep ===4){
    nextButton.disabled = true;
  }else if(progressStep >1){
    prevButton.disabled = false;
  }else if(progressStep === 1 ){
    prevButton.disabled = true;
  }
}

const goToNextStep = ()=>{
  
  circles[progressStep].classList.add('active');
  progressBar.style.width = `${progressPercent}%`;
  progressStep++;
  progressPercent += 33;
  checkProgressStep();
  console.log(progressStep);
}

const goToPrevStep = ()=>{
  
  circles[progressStep - 1].classList.remove('active');
  progressStep--;
  progressPercent -=33;
  progressBar.style.width = `${progressPercent}%`;
  checkProgressStep();
  console.log(progressStep);
}

nextButton.addEventListener('click', goToNextStep);
prevButton.addEventListener('click', goToPrevStep);