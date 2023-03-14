import { Field, Form, Formik } from 'formik'
import React from 'react'
import "./Abc.css"
function Abc() {
    const intitalValues = {
        uname:"",
        pass:""
    }
    const handleSubmit = (values) => {
        const finalData = {
            uname: values.uname,
            pass: values.pass,
        };
        console.log("Done");
        // const id = props.id;
        // dispatch(UpdateDepAction(finalData, id)).then(() => {
        //   alert("Details Saved successfully❤️");
        //   props.close();
        // });
      };
  return (
    <Formik initialValues={intitalValues}  className="form">
     <Form>
       <div className="input-container">
         <label>Username </label>
         <Field type="text" name="uname" required />
       </div>
       <div className="input-container">
         <label>Password </label>
         <Field type="text" name="pass" required />
       </div>
       <div className="button-container">
         <button type="submit">Submit</button>
       </div>
     </Form>
   </Formik>
  )
}

export default Abc
