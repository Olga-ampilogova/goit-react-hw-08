import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
//import { useEffect, useState } from "react";
//import { selectError } from "../../redux/contacts/selectors";
import { selectErrorRegistration } from "../../redux/auth/selectors";

const contactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short")
    .max(50, "Too long")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too short")
    .max(50, "Too long")
    .required("Required"),
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "Invalid email format"
    )
    .required("Required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const error = useSelector(selectErrorRegistration);
  //const [prevError, setPrevError] = useState(null);
  // useEffect(() => {
  //   if (error && error !== prevError) {
  //     notify();
  //     setPrevError(error);
  //   }
  // }, [error, prevError]);

  const notify = () => {
    toast.error(
      "This username already exists. Please choose another username or login."
    );
  };

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    if (error) {
      notify();
    }
    actions.resetForm();
  };

  console.log(error);
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={contactValidationSchema}
      onSubmit={handleSubmit}
    >
      <div className={css.container}>
        <Form className={css.form} autoComplete="off">
          <label className={css.label}>
            Username
            <Field type="text" name="name" className={css.field} />
            <ErrorMessage name="name" component="div" className={css.error} />
          </label>
          <label className={css.label}>
            Email
            <Field type="email" name="email" className={css.field} />
            <ErrorMessage name="email" component="div" className={css.error} />
          </label>
          <label className={css.label}>
            Password
            <Field type="password" name="password" className={css.field} />
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
          </label>
          <button type="submit" className={css.button}>
            Register
          </button>
          <div>
            <Toaster position="top-center" reverseOrder={false} />
          </div>
        </Form>
      </div>
    </Formik>
  );
}
