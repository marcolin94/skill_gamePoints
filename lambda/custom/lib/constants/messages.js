const messages = {
    ERROR: 'Mi dispiace, si è verificato un errore.',
    STOP: 'Ciao, alla prossima!',
    POINT: 'Ciao, alla prossima!',
    START_GAME: (playerOne, playerTwo, maxPoints) => `Pronti a giocare ${playerOne} e ${playerTwo}? Inizia ${playerOne}. Obbiettivo ${maxPoints}`
};

module.exports = messages;
