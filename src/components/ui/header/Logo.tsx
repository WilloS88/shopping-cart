import { Link } from "react-router-dom";
import HeaderIcon from "../../../assets/svg/header-icon.svg";

export const Logo = () => (
  <div className="flex lg:flex-1">
    <Link to="/" className="-m-1.5 p-1.5">
      <img className="h-[40px] w-auto" src={HeaderIcon} alt="Logo" />
    </Link>
  </div>
);
