import React from 'react'
import { useForm } from "react-hook-form";

function Account() {

    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => console.log(values);

    return (
        <div className='container'>
            <h1>Mon compte</h1>

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
                />
                {errors.password && errors.password.message}

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Account;
