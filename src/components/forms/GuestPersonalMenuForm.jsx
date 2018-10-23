import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'antd';
import { withFormik } from 'formik';
import { InputFiled } from '../../common';
import {
    required,
    minLength,
    email,
    validateForm,
    charsOnly,
    passwordConfirmation
} from '../../common/validation';
import { Link } from 'react-router-dom';

const registerFormSchema = {
    first_name: [required, charsOnly],
    last_name: [required, charsOnly],
    email: [required, email, minLength(3)],
    password: [required, minLength(6)],
    c_password: [required, passwordConfirmation('password')]
};

const validate = values => validateForm(values, registerFormSchema);

const GuestPersonalMenuForm = ({ errors, touched, handleChange, handleBlur, handleSubmit, values }) => {
    return (
        <Form className="register-form" name="register" onSubmit={handleSubmit}>
            <h1 className={'form-title'}>Персональное меню</h1>
            <InputFiled
                size={'large'}
                required
                onChange={handleChange}
                onBlur={handleBlur}
                name="first_name"
                meta={{ touched: touched.first_name, error: errors.first_name }}
                type="text"
                placeholder="Ваше имя"
                label="Имя"
                value={values.first_name}
            />
            <InputFiled
                size={'large'}
                required
                onChange={handleChange}
                onBlur={handleBlur}
                name="email"
                meta={{ touched: touched.email, error: errors.email }}
                type="text"
                placeholder="Ваш email"
                label="Почта"
                value={values.email}
            />
            <InputFiled
                size={'large'}
                required
                onChange={handleChange}
                onBlur={handleBlur}
                name="phone"
                meta={{ touched: touched.phone, error: errors.phone }}
                type="text"
                placeholder="Ваш контактный номер"
                label="Телефон"
                value={values.phone}
            />
            <div className={'buttons'}>
                <Button size={'large'} className={'floatLeft'} htmlType="submit">
                    <Link to={'/login'}>Составить</Link>
                </Button>
            </div>
        </Form>
    );
};

GuestPersonalMenuForm.propTypes = {
    handleSubmit: PropTypes.func,
    values: PropTypes.object,
    touched: PropTypes.object,
    handleBlur: PropTypes.func,
    handleChange: PropTypes.func,
    errors: PropTypes.object
};

const GuestPersonalMenuFormWithFormik = withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({ email: '', password: '', first_name: '', last_name: '', c_password: '' }),
    handleSubmit(
        values,
        {
            props: { onSubmit }
        }
    ) {
        onSubmit(values);
    },
    validate: values => validate(values),
    displayName: 'GuestPersonalMenuForm'
});

export default GuestPersonalMenuFormWithFormik(GuestPersonalMenuForm);