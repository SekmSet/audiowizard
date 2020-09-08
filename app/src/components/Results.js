import React, {useContext} from 'react';
import AppContext from '../context/context';

function Results(){
    const {lastName, firstName, gender } = useContext(AppContext);
console.log(gender)
    return (
        <div>
            <h2>Votre résultat : </h2>
            {gender === "Homme" && 'Monsieur '}
            {gender === "Femme" && 'Madame '}
            {firstName} {lastName}
        </div>
    )
}

export default Results;
