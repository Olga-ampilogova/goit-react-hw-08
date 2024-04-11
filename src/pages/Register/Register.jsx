import PageTitle from "../../components/PageTitle/PageTitle";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./Register.module.css";
export default function Register() {
  return (
    <>
      <PageTitle>
        <div className={css.container}>Register your account</div>
      </PageTitle>

      <RegistrationForm />
    </>
  );
}
