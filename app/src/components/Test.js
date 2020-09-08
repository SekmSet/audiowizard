import React, {useContext, useState} from 'react';
import {useForm} from "react-hook-form";

import AppContext from '../context/context';
import Stepper from "./Stepper";

function Test() {
    const { handleSubmit, register, errors } = useForm();
    const { setFullName, lastName, firstName, setGender, gender } = useContext(AppContext);
    const [step, setStep] = useState(0);

    const onSubmitStep1 = values => {
        setFullName(values);
        setStep(1)
    };

    const onSubmitStep2 = values => {
        setGender(values)
        setStep(2)
    };

    return (
        <div>
            <Stepper currentStep={step} setStep={setStep}>
                <div className="step">
                    <h2>Peux-tu indiquer l'identité du patient ?</h2>

                    <form onSubmit={handleSubmit(onSubmitStep1)}>
                        <label htmlFor="first_name">Prénom</label>
                        <input
                            name="first_name"
                            ref={register({
                                required: "Required",
                                pattern: {
                                    message: "invalid first_name"
                                }
                            })}
                            defaultValue={firstName}
                        />
                        {errors.first_name && errors.first_name.message}

                        <label htmlFor="last_name">Nom</label>
                        <input
                            name="last_name"
                            label="last_name"
                            type="text"
                            ref={register({
                                pattern: {
                                    message: "invalid last_name"
                                }
                            })}
                            defaultValue={lastName}

                        />
                        {errors.username && errors.username.message}

                        <button type="submit">Submit</button>
                    </form>
                </div>

                <div className="step">
                    <h2>Peux-tu indiquer son sexe ?</h2>

                    <button onClick={e => onSubmitStep2('Homme')} >Homme</button>
                    <button onClick={e => onSubmitStep2('Femme')} >Femme</button>
                </div>

                <div className="step">
                    <h1>Vos informations : </h1>
                    <ul>
                        <li>Nom : {lastName} </li>
                        <li>Prénom : {firstName} </li>
                        <li>Genre : {gender} </li>
                    </ul>
                </div>
            </Stepper>
        </div>
    )
}

export default Test;
