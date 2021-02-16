'use strict';
let score = 0
let userName =prompt('Whats your name?');
console.log (userName); 
alert('Welcome '+ userName+ ' lets rate how much you know me from 7/7?');

let iceCream =prompt('Do you think that I prefer eating ice-cream in winter more than summer?');
console.log (iceCream);
if (iceCream.toLowerCase() == 'yes') {
    score++ ;
    console.log(score)
    alert(iceCream+ ' you are right ,and especially vanilla, you got 1 point');
    
} else if (iceCream.toLowerCase() == 'y') {
    score++ ;
    console.log(score)
   alert(iceCream+ ' you are right ,and especially vanilla, you got 1 point');
  
  

   
}
else if (iceCream.toLowerCase() == 'no' || iceCream.toLowerCase !== 'n') {
    alert(iceCream+ ' wrong answer, 0 point');
    
    
}

let beginnerViolinist =prompt('Do you think I am a beginner violinist?');
console.log (beginnerViolinist);
if (beginnerViolinist.toLowerCase() == 'yes') {
    score++ ;
    console.log(score)
    alert(beginnerViolinist+ ' you are right ,I started learning it since 2019, you got 1 point');
} else if (beginnerViolinist.toLowerCase() == 'y') {
    score++ ;
    console.log(score)
   alert(beginnerViolinist+ ' you are right ,I started learning it since 2019, you got 1 point');
   
}
else {
    alert(beginnerViolinist+ ' wrong answer, 0 point');
}

let affectionateAnimals =prompt('Do you think I am in love with animals?');
console.log (affectionateAnimals);
if (affectionateAnimals.toLowerCase() == 'yes') {
    score++ ;
    console.log(score)
    alert(affectionateAnimals+ ' you are right ,I feel that animals look like babies,I am in love with panda baby <3 <3 and I hope to work as a panda nany , you got 1 point');
} else if (affectionateAnimals.toLowerCase() == 'y') {
    score++ ;
    console.log(score)
   alert(affectionateAnimals+ ' you are right ,I feel that animals look like babies,I am in love with panda baby <3 <3 and I hope to work as a panda nany , you got 1 point');
   
}
else {
    alert(affectionateAnimals+ ' wrong answer, 0 point');
}

let sensitivePerson =prompt('Do you think I am sensitive person?');
console.log (sensitivePerson);
if (sensitivePerson.toLowerCase() == 'yes') {
    score++ ;
    console.log(score)
    alert(sensitivePerson+ ' you are right, you got 1 point');
} else if (sensitivePerson.toLowerCase() == 'y') {
    score++ ;
    console.log(score)
   alert(sensitivePerson+ ' you are right, you got 1 point');
   
}
else {
    alert(sensitivePerson+ ' wrong answer, 0 point');
}


let lovelyPerson =prompt('Since we still do not know each other, do you think that I am a lovely person ?');
console.log (lovelyPerson);
if (lovelyPerson.toLowerCase() == 'yes') {
    score++ ;
    console.log(score)
    alert('thank you for feeling that to me <3 <3');
} else if (lovelyPerson.toLowerCase() == 'y') {
    score++ ;
    console.log(score)
   alert('thank you for feeling that to me <3 <3');
   
}
else {
    alert('since your answer is '+lovelyPerson+' lets give us a chance to know each other more :) :)' );
}

let i=0 ;
let yearAge =prompt ('Guess in which year I became 26 years old?'); 
for (i=0 ; i<3 ; i++) {
if (yearAge == 2020 ) {
    console.log (yearAge);
    alert ('you are right ,In ' +yearAge+ ' I became 26 years old');
    score++ ;
    console.log (score);
    break;
    
}
if (yearAge < 2020 ) {
    alert (' too low ');
    yearAge =prompt('Guess in which year I became 26 years old?');
}
    
if (yearAge > 2020 ) {
    alert (' too high ');
    yearAge =prompt('Guess in which year I became 26 years old?');
}

}

let favoriteStretchExercise = ['cobra stretch' , 'camel pose'  , 'side plank with arm raise' ];
let favoriteExercise = prompt ('guess from those what is my favorite stretching exercise (cobra stretch , regular plank ,camel pose , superman , eagle pose , side plank with arm raise)?');

for (i=0 ; i<5 ; i++ ){
    if (favoriteExercise === favoriteStretchExercise [0] || favoriteExercise === favoriteStretchExercise [1] || favoriteExercise === favoriteStretchExercise [2] ){
        alert ('you are right') 
        score++ ;
        console.log (score);
        break ;
    
    } else {
        favoriteExercise = prompt ('guess from those what is my favorite stretching exercise (cobra stretch , regular plank ,camel pose , superman , eagle pose , side plank with arm raise)?');
    } 
}
alert('your score=' + score+ '/7') ;