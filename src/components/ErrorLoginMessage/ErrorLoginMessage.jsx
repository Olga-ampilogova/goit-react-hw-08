import css from "./ErrorLoginMessage.module.css";
export const ErrorLoginMessage = () => {
  return (
    <p className={css.errorMessage}>
      Error! The unvailable e-mail or password!
    </p>
  );
};
