// script.js
const flashcards = document.querySelectorAll('.flashcard');
const answerInput = document.getElementById('answerInput');
const checkAnswerButton = document.getElementById('checkAnswer');
let currentCardIndex = 0;

function showCard(index) {
    flashcards.forEach((card, i) => {
        if (i === index) {
            card.classList.remove('answered', 'flipped'); // Asegura que la tarjeta actual esté visible
        } else {
            card.classList.add('answered'); // Oculta las demás tarjetas
        }
    });
}

flashcards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped'); // Voltea la tarjeta
    });
});

checkAnswerButton.addEventListener('click', () => {
    const userAnswer = answerInput.value.toLowerCase();
    const correctAnswer = flashcards[currentCardIndex].querySelector('.back h2').textContent.toLowerCase().replace('respuesta: ', '');

    if (userAnswer === correctAnswer) {
        alert('¡Correcto!');
        flashcards[currentCardIndex].classList.add('answered'); // Marca la tarjeta como respondida
        currentCardIndex++; // Pasa a la siguiente tarjeta
        if (currentCardIndex < flashcards.length) {
            setTimeout(() => showCard(currentCardIndex), 600); // Muestra la siguiente tarjeta después de un breve retraso
        } else {
            alert('¡Has respondido todas las tarjetas!');
        }
    } else {
        alert('Incorrecto. Intenta de nuevo.');
    }
});

// Inicializa la primera tarjeta
showCard(currentCardIndex);
