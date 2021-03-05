const qwerty = document.getElementById('qwerty');
const phrases = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
const overLay = document.getElementById('overlay');
const button = document.getElementsByTagName('button');
const liveHeart = document.querySelectorAll('.tries img');
let missed = 0;

const phraseList = [
  'A bird in the hand is worth two in the bush',
  'A bunch of fives',
  'A chain is only as strong as its weakest link',
  'A change is as good as a rest',
  'A countenance more in sorrow than in anger',
  'A Daniel come to judgement',
  'A diamond in the rough',
  'A diamond is forever',
  'A different kettle of fish',
  'A dish fit for the gods',

];


  startButton.addEventListener('click', () => {
  const phraseArray = getRandomPhraseAsArray(phraseList);
  addPhraseToDisplay(phraseArray);
  overLay.style.display = 'none';
});


//return a random phrase from an array
const getRandomPhraseAsArray = (arr) => {
  let randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
};


//adds the letters of a string to the display
const addPhraseToDisplay = (arr) => {
  let ul = phrases.querySelector('ul');
  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement("li");
    li.textContent = arr[i];
    ul.appendChild(li);
    if (arr[i] === " ") {
      li.classList.add("space");
    } else {
      li.classList.add("letter");
    }
  }

};

//check if a letter is in the phrase
const checkLetter = (button) => {
  const lettersList = document.querySelectorAll('.letter');
  let match = null;
  for (let i = 0; i < lettersList.length; i++) {
    if (button == lettersList[i].textContent.toLowerCase()) {
      lettersList[i].classList.add("show");
      match = button;
    }
  }
  return match;
};

// Listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    e.target.classList.add('chosen');
    e.target.setAttribute('disabled', true);
    let checked = checkLetter(e.target.textContent);
    console.log(checked);
    if (checked === null) {
      missed++;
      liveHeart[missed-1].setAttribute("src","images/lostHeart.png");
      }
    }
    checkWin();
});





// //   //check if the game has been won or lost
  const checkWin=()=>{
    const letterList=document.querySelectorAll('.letter');
    const showList=document.querySelectorAll('.show');
    const headLineText=document.querySelector('.title')
   let letterListCount=letterList.length;
   let showListCount=showList.length;

    if(letterListCount==showListCount){
        overLay.className = "win";
         headLineText.textContent=`"YOU WON!!!"`;
         overLay.style.display='flex';
         resetGame();
    }
  
    if(missed>=5){
        overLay.className = "lose";
       headLineText.textContent=`"YOU LOSE  =("`;
       overLay.style.display='flex';
      resetGame();
    
    }
 
    
  }

  const resetGame=()=>{
    startButton.textContent="reset";
    startButton.addEventListener('click', () => {
      location.reload(); 
    });
  };
