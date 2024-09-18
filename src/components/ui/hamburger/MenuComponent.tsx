import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { HamburgerButton } from './HamburgerButton';

export const MenuComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <HamburgerButton isOpen={isOpen} toggle={toggleSidebar} />
      <Sidebar isOpen={isOpen} onClose={closeSidebar} />
    </>
  );
};
