import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { Logo } from "./header/Logo";
import { Title } from "./header/Title";
import { DesktopMenu } from "./header/DesktopMenu";
import { AnchorsSection } from "../section/AnchorsSection";
import { MenuComponent } from "./hamburger/MenuComponent";

export const Header = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="bg-white">
      <nav className=" flex max-w-screen-2xl items-center justify-between p-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Logo />
          <Title />
        </div>
        <div>
          <AnchorsSection />
        </div>
        <div>
          <MenuComponent />
          <DesktopMenu totalQuantity={totalQuantity} />
        </div>
      </nav>
    </header>
  );
};
