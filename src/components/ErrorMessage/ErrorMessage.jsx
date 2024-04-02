import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return <p className={css.errorMessage}>Error! Reload the page</p>;
}
