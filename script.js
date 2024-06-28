if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("serviceworker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }  

let affirmationP = document.querySelector('.affirmation p');
let affirmationWrap = document.querySelector('.affirmation');
let button = document.querySelector('.button');
let heart = document.querySelector('.heart');
let shadow = document.querySelector('.shadow');
let last = [];
let lastThing;

function affirm() {
    let message = Math.floor(Math.random() * affirmations.length);
    message = affirmations[message];
    let recent = last.includes(message)
    if (!recent) {
        affirmationWrap.style.opacity = 0;
        setTimeout(() => {
            affirmationP.innerHTML = message;
            affirmationWrap.style.opacity = 1;
        }, 300);
    } else {
        affirm();
        return;
    }
    last.push(message);
    if (last.length > 10) {
        last.splice(0,1);
    } 
}

function heartStuff() {
    let action = Math.floor(Math.random() * heartThings.length);
    if (action != lastThing) {
        shadow.classList.add('paused');
        heart.classList.remove('waiting');
        heart.classList.add(heartThings[action]);
        heart.addEventListener('animationend', () => {
            heart.classList.remove(heartThings[action]);
            heart.classList.add('waiting');
            shadow.classList.remove('paused');
        })
    } else {
        heartStuff();
        return;
    }
    lastThing = action; 
}

let affirmations = [
    "You are amazing.",
    "I appreciate you, deeply.",
    "I am always next to you, even when I'm not right there.",
    "I'm so happy we get to grow old together.",
    "We are so lucky to be together.",
    "We fit perfectly.",
    "You are a gift.",
    "You are so important to me.",
    "Just being around you makes me feel special.",
    "I love you, all of you.",
    "You are worthy of all the love I can give you.",
    "I'm excited to grow old with you.",
    "You are my best friend.",
    "You make my life better in every way.",
    "Waking up next to you is the best part of my day.",
    "You are inspiring.",
    "I appreciate everything you do for our family.",
    "I believe in you.",
    "My magnet for you is crazy strong. :)",
    "Dook dook.",
    "Returning to you is one my favourite things."
];

let heartThings = [
    'wiggle',
    'beat',
    'spin',
    'backflip'
];

button.addEventListener('click', affirm);
heart.addEventListener('click', heartStuff);
