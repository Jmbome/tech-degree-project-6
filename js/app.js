

const qwerty=document.getElementById('qwerty');
const phrases=document.getElementById('phrase');
const startButton=document.querySelector('.btn__reset');
const overLay=document.getElementById('overlay'); 
const button=document.getElementsByTagName('button');
const heart=document.querySelector('.tries')
let missed=0;
const phraseList=[
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
     'A dog is a man\'s best friend'];


startButton.addEventListener('click',()=>{
 overLay.style.display='none';
 addPhraseToDisplay(phraseArray);
});


//return a random phrase from an array
 const getRandomPhraseAsArray= (arr) =>{
    let randomNumber= Math.floor(Math.random()*phraseList.length);
    return phraseList[randomNumber];
}
getRandomPhraseAsArray(phraseList);

//adds the letters of a string to the display
const addPhraseToDisplay=(arr)=>{
    let ul = phrases.querySelector('ul');
    for(let i=0; i<arr.length; i++){
     let li = document.createElement("li");
     li.textContent = arr[i];  
     ul.appendChild(li);
     if(arr[i]=== " "){
        li.classList.add("space");
     }else{
        li.classList.add("letter");
     } 
   }  
     
}
const phraseArray = getRandomPhraseAsArray(phraseList);

//check if a letter is in the phrase

const checkLetter = (button) => {
    let liList = document.querySelectorAll('li');
    let match = null;
    for (let i = 0; i < liList.length; i++) {
        if (button == liList[i].textContent) {
          liList[i].classList.add("show");
            match = button;
        }
    }
    return match;
};
//     //Listen for the onscreen keyboard to be clicked

//     qwerty.addEventListener('click',(e)=>{
//         let checked='';
//       if(e.target.tagName=="button"){
//        button.classlist.add('chosen');
//       checked=checkLetter();
//        if(checked==0){
//          heart-=1;
//          missed +=1;
//        }
//       }

//     } )

//     const letterList=document.querySelectorAll('.letter');
//     const showList=document.querySelectorAll('.show');
//     const winOverlay=overLay.classList.add("win");
//     const headLineText=document.querySelector('.title')
//     const loseOverlay=overLay.classList.add('lose');

    

// //   //check if the game has been won or lost
// //   const checkWin=()=>{
// //     if(letterList.length==showList.length){
//         overLay.className = "win";
//          headLineText.textContent=`"YOU WON!!!"`;
//          overLay.style.display='flex';
//     }

//     if(missed>4){
//         overLay.className = "lose";
//        headLineText.textContent=`"YOU LOSE=("`;
//        overLay.style.display='flex';
//    }
//   }