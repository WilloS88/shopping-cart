import { Link } from "react-router-dom";
import { UserRound } from "lucide-react";

export const UserButton = () => {
  return (
    <Link to="/" className="relative">
      <UserRound className="h-[25px] w-auto" />
    </Link>
  );
};
