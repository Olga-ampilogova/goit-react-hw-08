import { HiUser } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { useSelector } from "react-redux";
import { selectError } from "../../redux/contacts/selectors";
import toast from "react-hot-toast";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  if (!contact || Object.keys(contact).length === 0) {
    return null;
  }
  const notify = () => toast.success("The contact is successfuly deleted");
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    if (!error) {
      notify();
    }
  };

  return (
    <li className={css.item}>
      <div>
        <p className={css.title}>
          <HiUser className="my-icon" size="20" /> Name: {contact.name}
        </p>

        <p className={css.title}>
          <span className={css.img}>
            <BsTelephoneFill className="my-icon" size="20" />
          </span>
          Number: {contact.number}
        </p>
      </div>
      <button className={css.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}
