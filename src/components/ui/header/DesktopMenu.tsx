import { CartIcon } from "./CartIcon";

export const DesktopMenu = ({ totalQuantity }: { totalQuantity: number }) => (
  <div className="hidden lg:flex justify-end w-[183px]">
    <CartIcon totalQuantity={totalQuantity} />
  </div>
);
