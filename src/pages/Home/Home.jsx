import { useSelector } from "react-redux";
import { Loader } from "../../components/Loader/Loader";
import { selectLoading } from "../../redux/contacts/selectors";
import css from "./Home.module.css";

export default function Home() {
  const loading = useSelector(selectLoading);

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

      {loading && <Loader />}
    </>
  );
}
