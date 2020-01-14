import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './Auth.css';


const Auth = () => {
    const [formState, inputHandler ] = useForm({
        email: {
            value: '',
            valid: 'false'
        },
        password: {
            value: '',
            isValid: false
        }
    },false);
    
    const authSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs)
    }

    return (
        <Card className="authentication">
            <h2>Login Required</h2>
            <hr />
            <form onSubmit={authSubmitHandler}>
                <Input
                    element="input"
                    id="email"
                    type="email"
                    label="E-MAIL"
                    validators={[VALIDATOR_EMAIL()]}
                    errorText="Please enter a valid email address."
                    onInput={inputHandler}
                /> 
                <Input
                    element="input"
                    id="password"
                    type="password"
                    label="PASSWORD"
                    validators={[VALIDATOR_MINLENGTH(8)]}
                    errorText="Please enter a valid password, at least 8 characters."
                    onInput={inputHandler}
                />
                <Button type="submit" disabled={!formState.isValid}>LOGIN</Button>    
            </form>
        </Card>
    )
};

export default Auth;