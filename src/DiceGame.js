import React, { useState } from 'react';
import Dice from './Dice';

const DiceGame = () => {
    const [diceValues, setDiceValues] = useState([1, 1]);
    const [scores, setScores] = useState([0, 0]);
    const [currentPlayer, setCurrentPlayer] = useState(0);

    const calculateScore = (values) => {
        const score = values.reduce((sum, value) => sum + value, 0);
        const newScores = [...scores];
        newScores[currentPlayer] += score;
        setScores(newScores);
    };

    const switchPlayers = () => {
        setCurrentPlayer((currentPlayer + 1) % 2);
    };

    const rollDice = () => {
        const newDiceValues = diceValues.map(() => Math.floor(Math.random() * 6) + 1);
        setDiceValues(newDiceValues);
        calculateScore(newDiceValues);
        switchPlayers();
    };


    const resetGame = () => {
        setDiceValues([1, 1]);
        setScores([0, 0]);
        setCurrentPlayer(0);
    };

    return (
        <div>
            <h1>Jeu de dés</h1>
            <div className="dice-container">
                {diceValues.map((value, index) => (
                    <Dice key={index} value={value} />
                ))}
            </div>
            <button className="button" onClick={rollDice}>Lancer les dés</button>
            <div>
                <p>Score Joueur 1: {scores[0]}</p>
                <p>Score Joueur 2: {scores[1]}</p>
            </div>
            {scores[0] !== scores[1] && (
                <p className="winner">Gagnant: Joueur {scores[0] > scores[1] ? '1' : '2'}</p>
            )}
            <div>
                <button className="button" onClick={resetGame}>Réinitialiser le jeu</button>
            </div>
        </div>
    );
};

export default DiceGame;