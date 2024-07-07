import { Formik,Form ,Field, ErrorMessage } from "formik";
import React from "react";
import "./card.css";

const FormikFormDemo = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "First Name is Required";
    }
    if (!values.lastName) {
      errors.lastName = " Required";
    }
    if (!values.email) {
      errors.email = " Required";
    } else if (
      /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/i.test(values.email)
    ) {
      errors.email = "Invalid email Id";
    }
    return errors;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">  <h1>My Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
      >
        <Form>
          <div className="form-group">
            <lable  htmlFor="firstName">firstName</lable>
            <Field className="form-control" type="text" id="firstName" name="firstName" />
            <ErrorMessage name="firstName" component="div" className="error" />
          </div>
          <div className="form-group">
            <lable htmlFor="lastName">lastName</lable>
            <Field className="form-control" type="text" id="lastName" name="lastName" />
            <ErrorMessage name="lastName" component="div" className="error" />
          </div>
          <div className="form-group">
            <lable htmlFor="email">email</lable>
            <Field className="form-control" type="text" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <button className="btn btn-primary" type="submit">submit</button>
        </Form>
      </Formik></div>
        <div className="col-4"></div>
      </div>
    
    </div>
  );
};

export default FormikFormDemo;
