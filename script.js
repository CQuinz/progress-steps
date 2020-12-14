const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');
const circles = document.querySelectorAll('.circle');
const progressBar = document.querySelector('#progress');

let progressPercent =33;

let progressStep = 1;

const checkProgressStep = ()=>{
  if(progressStep >1){
    prevButton.removeAttribute('disabled');
  }else if(progressStep === 4){
    nextButton.setAttribute('disabled');
  }else if(progressStep === 1 ){
    prevButton.setAttribute('disabled');
  }
}

const goToNextStep = ()=>{
  circles[progressStep].classList.add('active');
  progressBar.style.width = `${progressPercent}%`;
  progressStep++;
  progressPercent += 33;
  checkProgressStep();
}

const goToPrevStep = ()=>{
  checkProgressStep();
  circles[progressStep - 1].classList.remove('active');
  progressStep--;
  progressPercent -=33;
  progressBar.style.width = `${progressPercent}%`;

}

nextButton.addEventListener('click', goToNextStep);
prevButton.addEventListener('click', goToPrevStep);