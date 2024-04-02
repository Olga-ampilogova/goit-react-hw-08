import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsOps";
const contactValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
  usernumber: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number")
    .required("Required"),
});
const InputField = ({ label, id, name, type }) => (
  <div className={css.inputField}>
    <label htmlFor={id} className={css.title}>
      {label}
    </label>
    <Field name={name} id={id} type={type} className={css.input} />
    <ErrorMessage name={name} />
  </div>
);

const SubmitButton = ({ label }) => (
  <button type="submit" className={css.submitButton}>
    {label}
  </button>
);

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact({ name: values.username, number: values.usernumber }));
    resetForm();
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={{
          username: "",
          usernumber: "",
        }}
        validationSchema={contactValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="">
            <InputField
              label="Name"
              id="username"
              name="username"
              type="text"
            />
            <InputField
              label="Number"
              id="usernumber"
              name="usernumber"
              type="phone"
            />
          </div>
          <SubmitButton label="Add contact" />
        </Form>
      </Formik>
    </div>
  );
}
