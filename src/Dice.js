import React from 'react';
import {diceImages} from "./helpers";
const Dice = ({ value }) => {
    return (
        <div className="dice">
            <img src={diceImages[value-1]} alt={diceImages[value-1]} />
            <p>Valeur: {value}</p>
        </div>
    );
};

export default Dice;