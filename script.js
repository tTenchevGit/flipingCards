const cards = document.querySelectorAll('.card_inner');

cards.forEach(card => card.addEventListener('click', ()=> {
    card.classList.toggle('flipped');

   
}));

