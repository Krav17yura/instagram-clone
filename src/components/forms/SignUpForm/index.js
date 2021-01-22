import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import './style.css'
import CircularProgress from "@material-ui/core/CircularProgress";

const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    nickName: Yup.string()
        .min(5, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    logoUrl: Yup.string()
        .min(10, 'Too Short!'),
    email: Yup.string().email('Invalid email').required('Required'),
});

export const SignUpForm = ({onSubmit, inProgress, onError}) => {

    const initialValue = {
        fullName: '',
        logoUrl: '',
        nickName: '',
        password: '',
        email: '',
    }

    const errorMessage = onError
        ? onError.code === 'auth/email-already-in-use'
            ? 'User already exist'
            : 'Something went wrong. Try again'
        : null;

    return (
        <div className={'signupFormContainer'}>
            <Formik
                initialValues={initialValue}
                validationSchema={SignupSchema}
                onSubmit={values => onSubmit(values)}
            >

                {({errors, touched}) => (
                    <Form className={'signupForm'}>
                        {errorMessage ? <span>{errorMessage}</span> : null}

                        <Field name="email" type="email" placeholder="Електронна адреса"
                               className={'signupForm-input'}/>
                        {errors.email && touched.email ?
                            <span className={'signupForm-error'}>{errors.email}</span> : null}

                        <Field name="fullName" type='text' placeholder="Повне ім'я" className={'signupForm-input'}/>
                        {errors.fullName && touched.fullName ? (
                            <span className={'signupForm-error'}>{errors.fullName}</span>
                        ) : null}

                        <Field name="nickName" type='text' placeholder="Ім'я користувача" className={'signupForm-input'}/>
                        {errors.nickName && touched.nickName ? (
                            <span className={'signupForm-error'}>{errors.nickName}</span>
                        ) : null}

                        <Field name="logoUrl" type='text' placeholder="Посилання на фотографію (опціонально)"
                               className={'signupForm-input'}/>
                        {errors.logoUrl && touched.logoUrl ? (
                            <span className={'signupForm-error'}>{errors.logoUrl}</span>
                        ) : null}

                        <Field name="password" type='password' placeholder="Пароль" className={'signupForm-input'}/>
                        {errors.password && touched.password ? (
                            <span className={'signupForm-error'}>{errors.password}</span>
                        ) : null}

                        <button type="submit">{inProgress?< CircularProgress  color={"secondary"} style={{width: 15, height: 15}} />: "Зареєструватися"}</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

