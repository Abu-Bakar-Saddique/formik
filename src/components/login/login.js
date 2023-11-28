import React from "react";
import { useDispatch } from 'react-redux';
import { loginAction } from "../../store/actionCreators/AuthActions";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.css';

const LoginPage = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().required("Password is required")
  });

  const initialValues = {
    email: "",
    password: ""
  };

  const handleSubmit = (values) => {
    dispatch(loginAction(values));
  };

  return (
    <div className="container">
      <h2>Login Page</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <Field
              type="text"
              id="email"
              name="email"
              className="form-control"
            />
            <div className="text-danger">
              <ErrorMessage name="email" component="div" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <Field
              type="password"
              id="password"
              name="password"
              className="form-control"
            />
            <div className="text-danger">
              <ErrorMessage name="password" component="div" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginPage;