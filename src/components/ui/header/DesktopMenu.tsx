import { CartButton } from "./CartButton";
import { SearchButton } from "../SearchButton";

export const DesktopMenu = ({ totalQuantity }: { totalQuantity: number }) => (
  <div className="hidden lg:flex justify-end w-[183px] gap-4">
    <SearchButton />
    <CartButton totalQuantity={totalQuantity} />
  </div>
);
