import HeaderIcon from "../../assets/svg/header-icon.svg";
import SearchIcon from "../../assets/svg/search-icon.svg";
import ShoppingCartIcon from "../../assets/svg/shopping-cart-icon.svg";
import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";


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
            <span className="sr-only font-mono">WilloS Blackmarket</span>
            <img className="h-[40px] w-auto" src={HeaderIcon} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 text-3xl font-mono font-semibold">
          WilloS Blackmarket
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-8">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            <img className="h-[25px] w-auto" src={SearchIcon} alt="" />
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            <img className="h-[25px] w-auto" src={ShoppingCartIcon} alt="" />
          </a>
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
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-[40px] w-auto" src={HeaderIcon} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Products
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About us
                </a>
              </div>
              
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
