import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "../assets/css/contact.css";
function ContactPage() {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    course: "",
    password: "",
    male: "",
    female: "",
    secret: "",
    check:false
  };
  const validateSchema = Yup.object({
    name: Yup.string().required("Required"),
    course: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    check: Yup.bool().oneOf([true], 'Accept Terms & Conditions is required'),
    email: Yup.string().email("Enter a valid email").required("Required"),
  });
  const handleSubmit = (values, action) => {
    const finalData = {
      name: values?.name,
      course: values?.course,
      email: values?.email,
      password: values?.password,
      male: values?.male,
      female: values?.female,
      secret: values?.secret,
      check:values?.check
    };
    console.log(finalData);
    alert("Details Saved successfully❤️");
    action.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateSchema}
      onSubmit={handleSubmit}
    >
      <div className="form-body contact">
        <div className="row">
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items">
                <h3>Register Today</h3>
                <p>Fill in the data below.</p>
                <Form className="requires-validation">
                  <div className="col-md-12">
                    <Field
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Full Name"
                    />
                  </div>
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text text-danger ml-2"
                  />
                  <div className="col-md-12">
                    <Field
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="E-mail Address"
                    />
                  </div>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text text-danger ml-2"
                  />
                  <div className="col-md-12">
                    <Field
                      as="select"
                      name="course"
                      className="form-select mt-3"
                    >
                      <option value="" disabled>
                        Course
                      </option>
                      <option value="Application Design">
                        Application Design
                      </option>
                      <option value="Chemical Engineering">
                        Chemical Engineering
                      </option>
                      <option value="Math Major">Math Major</option>
                      <option value="English Major">English Major</option>
                    </Field>
                  </div>
                  <ErrorMessage
                    name="course"
                    component="div"
                    className="text text-danger ml-2"
                  />
                  <div className="col-md-12">
                    <Field
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text text-danger ml-2"
                  />
                  <div className="col-md-12 mt-3">
                    <label className="mb-3 mr-1" htmlFor="gender">
                      Gender:
                    </label>
                    <Field
                      type="radio"
                      className="btn-check"
                      name="gender"
                      id="male"
                      value="male"
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-sm btn-outline-secondary"
                      htmlFor="male"
                    >
                      Male
                    </label>
                    <Field
                      type="radio"
                      className="btn-check"
                      name="gender"
                      id="female"
                      autoComplete="off"
                      value="female"
                    />
                    &nbsp;
                    <label
                      className="btn btn-sm btn-outline-secondary"
                      htmlFor="female"
                    >
                      Female
                    </label>
                    <Field
                      type="radio"
                      className="btn-check"
                      name="gender"
                      id="secret"
                      autoComplete="off"
                      value="secret"
                    />
                    &nbsp;
                    <label
                      className="btn btn-sm btn-outline-secondary"
                      htmlFor="secret"
                    >
                      Secret
                    </label>
                    &nbsp;
                    <div className="valid-feedback mv-up">
                      You selected a gender!
                    </div>
                    <div className="invalid-feedback mv-up">
                      Please select a gender!
                    </div>
                  </div>
                  <div className="form-check">
                    <Field
                      className="form-check-input"
                      type="checkbox"
                      value="check"
                      name="check"
                      id="invalidCheck"
                    />
                    <label className="form-check-label">
                      I confirm that all data are correct
                    </label>
                  </div>
                  <ErrorMessage
                    name="check"
                    component="div"
                    className="text text-danger ml-2"
                  />
                  <div className="form-button mt-3">
                    <button
                      id="submit"
                      type="submit"
                      className="btn btn-primary"
                    >
                      Register
                    </button>{" "}
                    &nbsp;
                    <button
                      onClick={() => navigate("/")}
                      id="btn"
                      type="button"
                      className="btn btn-primary"
                    >
                      Home
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Formik>
  );
}

export default ContactPage;
