import links from "../../utils/navigationLinks";
import Menu from "../Menu/Menu";
import styles from "./Nav.module.css";
import {NavLink} from "react-router-dom";

const NavLinks = ({url, name}) => {
  return <NavLink to={`${url}`}>{name}</NavLink>
};
const Nav = ({id, isExpanded}) => {
  const style = {
    parent: `${styles.menu}`,
    child: `${styles.item}`,
  };

  return (
    <nav className={`${styles.nav}`} role="navigation" id={id} aria-expanded={`${isExpanded}`}>
      <Menu
        data={links}
        Component={NavLinks}
        styleElement={style}
        role="menuitem"
      />
    </nav>
  );
};

export default Nav;
