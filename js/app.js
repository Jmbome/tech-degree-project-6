const qwerty=document.getElementById('qwerty');
const phrases=document.getElementById('phrase');
const startButton=document.querySelector('.btn__reset');
const overLay=document.getElementById('overlay'); 
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

let missedVa=0;

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
    let items='';
    let ul = phrases.querySelector('ul');
    let li = document.createElement("li");
    for(let i=0; i<arr.length; i++){
     li.textContent = arr[i];  
     ul.appendChild(li);
     if(arr[i]=== " "){
        li.classList.add("space");
     }else{
        li.classList.add("letter");
     } 
   }
    }
     
}

const phraseArray = getRandomPhraseAsArray(phraseList);
