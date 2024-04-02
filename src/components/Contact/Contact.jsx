import { HiUser } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  if (!contact || Object.keys(contact).length === 0) {
    return null;
  }

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
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
