import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import PageTitle from "../../components/PageTitle/PageTitle";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Loader } from "../../components/Loader/Loader";
import css from "./Contacts.module.css";

export default function Contacts() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <PageTitle> Your contacts</PageTitle>
      <ContactForm />
      <div>{isLoading && "Request is in progress..."}</div>
      <ContactList />
      <SearchBox />
      <div className={css.loaderContainer}>{isLoading && <Loader />}</div>
      {error && <ErrorMessage />}
    </>
  );
}
