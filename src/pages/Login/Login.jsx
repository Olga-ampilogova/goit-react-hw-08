import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import PageTitle from "../../components/PageTitle/PageTitle";
import css from "./Login.module.css";

export default function Login() {
  return (
    <div>
      <PageTitle>
        <p className={css.title}>Please log in</p>
      </PageTitle>
      <LoginForm />
      <p className={css.link}>
        <span className={css.span}>or</span>{" "}
        <Link to="/register">Register</Link>
      </p>
    </div>
  );
}
