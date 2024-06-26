import { DropdownItemsContainer } from "./styled";
import { Menu } from "../index";
import { MenuItemsData } from "../../menuItemsData";

interface DropdownProps {
  submenus: MenuItemsData[] | undefined;
  open: boolean;
  depthLevel: number;
}

export const Dropdown = ({ submenus, open, depthLevel }: DropdownProps) => {
  depthLevel = depthLevel + 1;

  return (
    <DropdownItemsContainer $open={open} $submenu={depthLevel > 1}>
      {submenus?.map((submenu, index) => (
        <Menu items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </DropdownItemsContainer>
  );
};
