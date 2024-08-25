import { Link } from "react-router-dom";
import HeaderIcon from "../../assets/svg/header-icon.svg";
import SearchIcon from "../../assets/svg/search-icon.svg";
import ShoppingCartIcon from "../../assets/svg/shopping-cart-icon.svg";

import { useState } from "react";
import { Button } from "../ui/Button";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-screen-2xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img className="h-[40px] w-auto" src={HeaderIcon} alt="" />
          </a>
        </div>
        <Popover.Group className="hidden sm:flex lg:gap-x-12 text-4xl font-mono font-semibold">
          WilloS Blackmarket
        </Popover.Group>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-12 w-12" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-8">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            <img className="h-[25px] w-auto" src={SearchIcon} alt="Search" />
          </a>
          <Link to={"/cart"}>
            <img
              className="h-[25px] w-auto"
              src={ShoppingCartIcon}
              alt="Cart"
            />
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden h-80%"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between text-2xl font-mono font-semibold">
            WilloS Blackmarket  
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-12 w-" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="flex-col justify-center py-6 ">
                <div className="mt-2 min-w-56">
                  <Link to="/home" className="inline-block">
                    <Button
                      type="button"
                      label="Home"
                      className="primary justify-center w-[100px]"
                    />
                  </Link>
                </div>
                <div className="mt-2 min-w-56">
                  <Link to="/products" className="inline-block">
                    <Button
                      type="button"
                      label="Products"
                      className="primary justify-center w-[100px]"
                    />
                  </Link>
                </div>
                <div className="mt-2 ">
                  <Link to="/aboutus" className="inline-block">
                    <Button
                      type="button"
                      label="About Us"
                      className="primary justify-center w-[100px]"
                    />
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
