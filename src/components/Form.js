import React from 'react';
import { useFormik } from 'formik';

const initialValues = {
    name: '',
    email: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: ''
}

const Form = () => {

    const onSubmit = values => console.log(JSON.stringify(values, null, 2));;

    const formik = useFormik({
        initialValues,
        onSubmit
    });

    return(
        <>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" {...formik.getFieldProps('name')} />
                </div>
                <div className="field-inline">
                    <label htmlFor="email">e-mail</label>
                    <input type="text" {...formik.getFieldProps('email')} />
                </div>
                <div className="field-inline">
                    <label htmlFor="dateOfBirth">data de nascimento</label>
                    <input type="text" {...formik.getFieldProps('dateOfBirth')} />
                </div>
                <div>
                    <label htmlFor="password">senha</label>
                    <input type="text" {...formik.getFieldProps('password')} />
                </div>
                <div>
                    <label htmlFor="confirmPassword">confirmar senha</label>
                    <input type="text" {...formik.getFieldProps('confirmPassword')} />
                </div>
                <button type="submit">enviar</button>
            </form>
            <div style={{ textAlign: "left" }}>
                <pre>{JSON.stringify(formik.values, null, 2)}</pre>
            </div>  
        </>
    )
}

export default Form;

