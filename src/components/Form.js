import React from 'react';
import { useFormik } from 'formik';

const initialFields = {
    name: '',
    email: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: ''
}

const Form = () => {
    return(
        <>
            <form>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" />
                </div>
                <div className="field-inline">
                    <label htmlFor="email">e-mail</label>
                    <input type="text" />
                </div>
                <div className="field-inline">
                    <label htmlFor="dateOfBirth">data de nascimento</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="password">senha</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="confirmPassword">confirmar senha</label>
                    <input type="text" />
                </div>
                <button type="submit">enviar</button>
            </form>
        </>
    )
}

export default Form;

