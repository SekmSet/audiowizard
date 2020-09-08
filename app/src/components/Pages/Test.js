import React, {useContext, useState} from 'react';
import {useForm} from "react-hook-form";
import { Button } from 'react-bootstrap';
import classNames from "classnames";

import AppContext from '../../context/AppContext';
import Stepper from "../Stepper";

const Homme = 'Homme';
const Femme = 'Femme';

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
        <Stepper currentStep={step} setStep={setStep}>
            <div className="step">
                <h2>Peux-tu indiquer l'identité du patient ?</h2>
                <form onSubmit={handleSubmit(onSubmitStep1)}>
                    <div className="form-group">
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
                            className="form-control"
                        />
                        {errors.first_name && errors.first_name.message}
                    </div>
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
                        className="form-control"
                    />
                    {errors.username && errors.username.message}

                    <Button variant="outline-success" type="submit">Submit</Button>
                </form>
            </div>

            <div className="step">
                <h2>Peux-tu indiquer son sexe ?</h2>
                <Button variant="outline-dark" className={classNames({ active: gender === Homme })} onClick={e => onSubmitStep2(Homme)} >Homme</Button>
                <Button variant="outline-dark" className={classNames({ active: gender === Femme })} onClick={e => onSubmitStep2(Femme)} >Femme</Button>
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
    )
}

export default Test;
