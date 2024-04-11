import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import { useSelector } from "react-redux";
import { selectErrorRegistration } from "../../redux/auth/selectors";
import toast from "react-hot-toast";

const contactValidationSchema = Yup.object().shape({
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

export default function LoginForm() {
  const dispatch = useDispatch();
  const error = useSelector(selectErrorRegistration);

  const notify = () => toast.error(" Invalid email or password!");
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    if (error) {
      notify();
    }
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={contactValidationSchema}
      onSubmit={handleSubmit}
    >
      <div className={css.container}>
        <Form className={css.form} autoComplete="off">
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
            Log In
          </button>
        </Form>
      </div>
    </Formik>
  );
}
