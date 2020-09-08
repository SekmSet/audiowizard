import React from 'react';
import {useHistory} from "react-router-dom";

function Stepper({children, currentStep = 0, setStep}) {
    const childrens = React.Children.toArray(children);
    const history = useHistory();

    const resultsPreview = () => {
        history.push('/results');
    }

    return (
        <div>
            {childrens[currentStep]}

            {currentStep !== 0 &&
                <button onClick={() => setStep(currentStep-1)}>Previous</button>
            }

            {currentStep !== childrens.length-1 &&
                <button onClick={() => setStep(currentStep+1)}>Next</button>
            }

            {currentStep === childrens.length-1 &&
                <button onClick={() => resultsPreview()}>Results</button>
            }
        </div>
    )
}

export default Stepper;
