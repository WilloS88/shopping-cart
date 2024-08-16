import { Link } from "react-router-dom";

import { Button } from "../ui/Button";

import { House } from "lucide-react";
import { ScrollText } from "lucide-react";
import { PersonStanding } from "lucide-react";

export const AnchorsSection = () => {
  return (
    <div className="flex justify-center gap-5">
      <Link to="/" className="inline-block">
        <Button
          type="button"
          label="Home"
          className="primary"
          icon={<House />}
        />
      </Link>
      <Link to="/products" className="inline-block">
        <Button
          type="button"
          label="Go to Products"
          className="primary"
          icon={<ScrollText />}
        />
      </Link>
      <Link to="/aboutus" className="inline-block">
        <Button
          type="button"
          label="About Us"
          className="primary"
          icon={<PersonStanding />}
        />
      </Link>
    </div>
  );
};
