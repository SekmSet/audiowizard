import React from 'react';
import {useHistory} from "react-router-dom";
import { Button } from 'react-bootstrap';

function Stepper({children, currentStep = 0, setStep}) {
    const childrens = React.Children.toArray(children);
    const history = useHistory();

    const resultsPreview = () => {
        history.push('/results');
    }

    return (
        <div>
            {childrens[currentStep]}

            <hr/>

            {currentStep !== 0 && <Button variant="outline-secondary" onClick={() => setStep(currentStep-1)}>Previous</Button>}

            {currentStep !== childrens.length-1 && <Button variant="outline-info" onClick={() => setStep(currentStep+1)}>Next</Button>}

            {currentStep === childrens.length-1 && <Button variant="outline-success" onClick={() => resultsPreview()}>Results</Button>}
        </div>
    )
}

export default Stepper;
