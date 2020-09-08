import React from 'react'
import { useForm } from "react-hook-form";
import {Button} from "react-bootstrap";

function Account() {

    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => console.log(values);

    return (
        <div className='container'>
            <h1>Mon compte</h1>
            <div className="form-group">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="username">Username</label>
                    <input
                        name="username"
                        ref={register({
                            required: "Required",
                            pattern: {
                                message: "invalid username"
                            }
                        })}
                        className="form-control"
                    />
                    {errors.username && errors.username.message}

                    <label htmlFor="password">Password</label>
                    <input
                        name="password"
                        label="password"
                        type="password"
                        ref={register({
                            pattern: {
                                message: "invalid password"
                            }
                        })}
                        className="form-control"
                    />
                    {errors.password && errors.password.message}
                    <Button variant="outline-success" type="submit">Submit</Button>
                </form>
            </div>
        </div>
    )
}

export default Account;
