import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import './style.css'
import CircularProgress from "@material-ui/core/CircularProgress";

const SignupSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

const printErrorMessage = error => {
    switch (error.code) {
        case 'auth/wrong-password':
            return 'Wrong credentials';
        case 'auth/currentUser-not-found':
            return 'User does not exist';
        case 'auth/too-many-requests':
            return 'User blocked. Restore password or try again later';
        default:
            return 'Something went wrong. Try again';
    }
};

export const LoginForm = ({onSubmit, inProgress, onError}) => {
    const initialValue = {
        password: '',
        email: '',
    }

    const errorMessage = onError ? printErrorMessage(onError) : null;

    return (
        <div className={'loginFormContainer'}>
            <Formik
                initialValues={initialValue}
                validationSchema={SignupSchema}
                onSubmit={values => onSubmit(values)}
            >
                {({errors, touched}) => (
                    <Form className={'loginForm'}>
                        {onError ? <span>{errorMessage}</span> : null}

                        <Field name="email" type="email" placeholder="Електронна адреса"
                               className={'loginForm-input'}/>
                        {errors.email && touched.email ?
                            <span className={'loginForm-error'}>{errors.email}</span> : null}

                        <Field name="password" type='password' placeholder="Пароль" className={'signupForm-input'}/>
                        {errors.password && touched.password ? (
                            <span className={'loginForm-error'}>{errors.password}</span>
                        ) : null}

                        <button type="submit">{inProgress?< CircularProgress  color={"secondary"} style={{width: 15, height: 15}} />: 'Увійти'}</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
