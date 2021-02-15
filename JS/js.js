'use strict';
let userName =prompt('Whats your name?');
console.log (userName); 
alert('Wlecome '+ userName+ ' lets rate how much you know me from 5/5?');

let iceCream =prompt('Do you think that I prefer eating ice-cream in winter more than summer?');
console.log (iceCream);
if (iceCream.toLowerCase() == 'yes') {
    alert(iceCream+ ' you are right ,and especially vanilla, you got 1 point');
} else if (iceCream.toLowerCase() == 'y') {
   alert(iceCream+ ' you are right ,and especially vanilla, you got 1 point');
   
}
else {
    alert(iceCream+ ' wrong answer, 0 point');
}


let beginnerViolinist =prompt('Do you think I am a beginner violinist?');
console.log (beginnerViolinist);
if (beginnerViolinist.toLowerCase() == 'yes') {
    alert(beginnerViolinist+ ' you are right ,I started learning it since 2019, you got 1 point');
} else if (beginnerViolinist.toLowerCase() == 'y') {
   alert(beginnerViolinist+ ' you are right ,I started learning it since 2019, you got 1 point');
   
}
else {
    alert(beginnerViolinist+ ' wrong answer, 0 point');
}

let affectionateAnimals =prompt('Do you think I am affectionate with animals?');
console.log (affectionateAnimals);
if (affectionateAnimals.toLowerCase() == 'yes') {
    alert(affectionateAnimals+ ' you are right ,I feel animals look like babies,I am in love with panda baby <3 <3 , you got 1 point');
} else if (affectionateAnimals.toLowerCase() == 'y') {
   alert(affectionateAnimals+ ' you are right ,I feel that animals look like babies,I am in love with panda baby <3 <3 , you got 1 point');
   
}
else {
    alert(affectionateAnimals+ ' wrong answer, 0 point');
}

let sensitivePerson =prompt('Do you think I am sensitive person?');
console.log (sensitivePerson);
if (sensitivePerson.toLowerCase() == 'yes') {
    alert(sensitivePerson+ ' you are right, you got 1 point');
} else if (sensitivePerson.toLowerCase() == 'y') {
   alert(sensitivePerson+ ' you are right, you got 1 point');
   
}
else {
    alert(sensitivePerson+ ' wrong answer, 0 point');
}


let lovelyPerson =prompt('Since we still do not know each other, do you think that I am a lovely person ?');
console.log (lovelyPerson);
if (lovelyPerson.toLowerCase() == 'yes') {
    alert('thank you for feeling that to me <3 <3');
} else if (lovelyPerson.toLowerCase() == 'y') {
   alert('thank you for feeling that to me <3 <3');
   
}
else {
    alert('since your answer is '+lovelyPerson+' lets give us a chance to know each other more :) :)' );
}





