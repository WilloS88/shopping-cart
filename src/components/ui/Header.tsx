import { Link } from "react-router-dom";
import HeaderIcon from "../../assets/svg/header-icon.svg";
import SearchIcon from "../../assets/svg/search-icon.svg";
import ShoppingCartIcon from "../../assets/svg/shopping-cart-icon.svg";

import { useState } from "react";
import { Button } from "../ui/Button";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-screen-2xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo Section */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <img
              className="h-[40px] w-auto"
              src={HeaderIcon}
              alt="WilloS Blackmarket Logo"
            />
          </Link>
        </div>

        {/* Title */}
        <Popover.Group className="hidden sm:flex lg:gap-x-12 text-4xl font-mono font-semibold">
          WilloS Blackmarket
        </Popover.Group>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only"></span>
            <Bars3Icon className="h-12 w-12" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-8">
          {/* Search Icon */}
          <Link
            to="/search"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            <img className="h-[25px] w-auto" src={SearchIcon} alt="Search" />
          </Link>

          {/* Cart Icon with Badge */}
          <Link to="/cart" className="relative">
            <img
              className="h-[25px] w-auto"
              src={ShoppingCartIcon}
              alt="Cart"
            />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-center rounded-full px-1.5 py-0.5 text-xs font-bold">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Dialog */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-20 w-full max-w-sm overflow-y-auto bg-white px-6 py-6 shadow-lg sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between text-2xl font-mono font-semibold">
            WilloS Blackmarket
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-12 w-12" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="flex flex-col justify-center py-6">
                <div className="mt-2 min-w-56">
                  <Link
                    to="/"
                    className="inline-block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button
                      type="button"
                      label="Home"
                      className="primary justify-center w-[100px]"
                    />
                  </Link>
                </div>
                <div className="mt-2 min-w-56">
                  <Link
                    to="/products"
                    className="inline-block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button
                      type="button"
                      label="Products"
                      className="primary justify-center w-[100px]"
                    />
                  </Link>
                </div>
                <div className="mt-2">
                  <Link
                    to="/aboutus"
                    className="inline-block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button
                      type="button"
                      label="About Us"
                      className="primary justify-center w-[100px]"
                    />
                  </Link>
                </div>
                <div className="mt-5">
                  <Link
                    to="/cart"
                    className="relative"
                    onClick={() => setMobileMenuOpen(false)}
                  >
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
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
