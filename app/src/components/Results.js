import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import {Card} from "react-bootstrap";

function Results(){
    const {lastName, firstName, gender } = useContext(AppContext);

    return (
        <div>
            <Card
                bg="dark"
                text= 'light'
                className="mb-2"
            >
                <Card.Header>Votre résultat :</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {gender === "Homme" ? 'Monsieur' : 'Madame'} {firstName} {lastName}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Results;
