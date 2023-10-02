import { Link } from "react-router-dom";
import aluraLogo from "../../../public/logo.svg";

const Logo = () => {
  return (
    <Link to="/">
      <img
        /* logo esta definido en GlobalStyle.js */
        className="w-52 logo h-auto"
        src={aluraLogo}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
