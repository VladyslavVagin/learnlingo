// @ts-nocheck
import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import Modal from "../Modal";
import sprite from "../../../icons/icons.svg";
import {
  FormTitleContainer,
  Label,
  StyledField,
  StyledForm,
  SubmitBtn,
} from "../Login/Login.styled";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const patternEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const schema = yup.object().shape({
  name: yup.string().min(1).max(24).required(),
  email: yup.string().email().required(),
  password: yup.string().min(5).max(16).required(),
});

const Register = ({ setShowRegister }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = (dataForm, { resetForm }) => {
    console.log(dataForm);
    resetForm();
  };

  return (
    <Modal setShowLogin={setShowRegister}>
      <FormTitleContainer>
        <h2>Registration</h2>
        <p>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
      </FormTitleContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <StyledField
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[A-Za-z\s]{1,24}$"
            required
            aria-label="Input for type your name"
          />
          <StyledField
            type="email"
            name="email"
            placeholder="Email"
            pattern={patternEmail}
            required
            aria-label="Input for type your email"
          />
          <Label htmlFor="password">
            <StyledField
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              aria-label="Input for type your password"
            />
            <div onClick={handleShowPassword}>
              <svg width={20} height={20}>
                <use
                  xlinkHref={
                    showPassword
                      ? `${sprite}#icon-eye`
                      : `${sprite}#icon-eye-off`
                  }
                ></use>
              </svg>
            </div>
          </Label>
          <SubmitBtn type="submit">Sign Up</SubmitBtn>
        </StyledForm>
      </Formik>
    </Modal>
  );
};

export default Register;