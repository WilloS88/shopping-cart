import { Link } from "react-router-dom";
import { Button } from "../Button";
import ShoppingCartIcon from "../../../assets/svg/shopping-cart-icon.svg";

type MobileMenuProps = {
  totalQuantity: number;
  isOpen: boolean;
  onClose: () => void;
};

const Links = [
  { link: "/", text: "Home" },
  { link: "/products", text: "Products" },
  { link: "/aboutus", text: "About Us" },
];

export const MobileMenu = ({ totalQuantity, onClose }: MobileMenuProps) => (
  <div className="mt-6 flow-root">
    <div className="-my-6 divide-y divide-gray-500/10">
      <div className="flex flex-col justify-center py-6">
        {Links.map((item, index) => (
          <div key={index} className="mt-2 min-w-56">
            <Link to={item.link} className="inline-block" onClick={onClose}>
              <Button
                type="button"
                label={item.text}
                className="primary justify-center w-[100px]"
              />
            </Link>
          </div>
        ))}
        <div className="mt-5">
          <Link to="/cart" className="relative" onClick={onClose}>
            <img
              className="h-[50px] w-[50px]"
              src={ShoppingCartIcon}
              alt="Cart"
            />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 left-11 bg-gray-800 text-white text-center rounded-full px-1.5 py-0.5 text-xs font-bold">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  </div>
);
