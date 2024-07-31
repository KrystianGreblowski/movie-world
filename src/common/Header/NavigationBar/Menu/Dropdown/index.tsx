import { DropdownItemsContainer } from "./styled";
import { Menu } from "../index";
import { MenuItemsData } from "../../menuItemsData";

interface DropdownProps {
  submenus?: MenuItemsData[];
  open: boolean;
  depthLevel: number;
  setMenuOpen: (
    open: boolean | ((previousMenuOpenState: boolean) => boolean),
  ) => void;
}

export const Dropdown = ({
  submenus,
  open,
  depthLevel,
  setMenuOpen,
}: DropdownProps) => {
  depthLevel = depthLevel + 1;

  return (
    <DropdownItemsContainer $open={open} $submenu={depthLevel > 1}>
      {submenus?.map((submenu, index) => (
        <Menu
          items={submenu}
          key={index}
          depthLevel={depthLevel}
          menuOpen={open}
          setMenuOpen={setMenuOpen}
        />
      ))}
    </DropdownItemsContainer>
  );
};
