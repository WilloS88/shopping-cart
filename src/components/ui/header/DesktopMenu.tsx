import { CartButton } from "./CartButton";
import { SearchButton } from "../SearchButton";
import { UserButton } from "./UserButton";

export const DesktopMenu = ({ totalQuantity }: { totalQuantity: number }) => (
  <div className="hidden lg:flex justify-end w-[183px] gap-4">
    <SearchButton isMobile={false} />
    <CartButton totalQuantity={totalQuantity} />
    <UserButton />
  </div>
);
