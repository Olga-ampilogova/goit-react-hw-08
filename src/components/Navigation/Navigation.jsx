//import { NavLink } from "react-router-dom";
//import css from "./Navigation.module.css";
//import clsx from "clsx";

// const getLinkClasses = ({ isActive }) => {
//   return clsx(css.link, isActive && css.isActive);
// };
// export default function Navigation() {
//   return (
//     <nav className={css.nav}>
//       <NavLink to="/" className={getLinkClasses}>
//         Home
//       </NavLink>
//       <NavLink to="/register" className={getLinkClasses}>
//         Register
//       </NavLink>
//       <NavLink to="/login" className={getLinkClasses}>
//         Login
//       </NavLink>
//       <NavLink to="/contacts" className={getLinkClasses}>
//         Contacts
//       </NavLink>
//     </nav>
//   );
// }

import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
