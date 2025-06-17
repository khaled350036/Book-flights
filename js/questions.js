

const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');





function switchCards(currentCard, nextCard) {
    currentCard.classList.add('hidden'); 
    currentCard.style.display = 'none';
    nextCard.style.display = 'block';
    
}

// الاستخدام
function cardClick1() {
    switchCards(card1, card2);
}

function cardClick2() {
    switchCards(card2, card3);
}

function cardClick3() {
    switchCards(card3, card4);
}

function cardClick4() {
    window.location.href="places.html";
}























