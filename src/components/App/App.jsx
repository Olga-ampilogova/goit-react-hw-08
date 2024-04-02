import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAll } from "../../redux/contactsOps";
import { Loader } from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { selectError, selectLoading } from "../../redux/contactsSlice";
import css from "./App.module.css";
export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <>
      <p className={css.title}>Contacts Notebook</p>
      <ContactForm />
      <ContactList />
      <SearchBox />
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
}
