import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const contactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short")
    .max(50, "Too long")
    .required("Required"),
  password: Yup.string()
    .min(7, "Too short")
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

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <div>
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
              <ErrorMessage
                name="email"
                component="div"
                className={css.error}
              />
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
            <div></div>
          </Form>
        </div>
      </Formik>
    </div>
  );
}
