//import ContactForm from "../../components/ContactForm/ContactForm";
//import ContactList from "../../components/ContactList/ContactList";
//import SearchBox from "../../components/SearchBox/SearchBox";
//import { useEffect } from "react";
import { useSelector } from "react-redux";
//import { fetchContacts } from "../../redux/contacts/operations";
import { Loader } from "../../components/Loader/Loader";
//import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { selectLoading } from "../../redux/contacts/selectors";
import css from "./Home.module.css";
//import css from "../Home/Home.module.css";
//import AppBar from "../../components/AppBar/AppBaar";
export default function Home() {
  //const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  //const error = useSelector(selectError);
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
      <p className={css.title}>Contact APP</p>
      <p className={css.content}>
        The Contacts app is a simple address book. It stores name and telephone
        number for each contact person. However, the real purpose of the app is
        to demonstrate the content app framework. This app is an example how to
        use the ready-made constructs provided by the framework to build a tool
        that allows editors to create their own custom data model and use the
        data on the website.
      </p>
      {/* <ContactForm />
      <ContactList /> */}
      {/* <SearchBox /> */}
      {loading && <Loader />}
      {/* {error && <ErrorMessage />} */}
    </>
  );
}
