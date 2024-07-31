import { useState } from "react";
import {
  Wrapper,
  MenuButton,
  MenuImage,
  MenuTitle,
  DropdownItem,
  DropdownItemLink,
  DropdownItemArrow,
  DropdownItemTitle,
} from "./styled";
import { Dropdown } from "./Dropdown";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { MenuItemsData } from "../menuItemsData";

interface MenuProps {
  items: MenuItemsData;
  depthLevel: number;
  menuOpen: boolean;
  setMenuOpen: (
    open: boolean | ((previousOpenState: boolean) => boolean),
  ) => void;
  closeMenu: () => void;
}

export const Menu = ({
  items,
  depthLevel,
  menuOpen,
  setMenuOpen,
  closeMenu,
}: MenuProps) => {
  const [open, setOpen] = useState(false);

  const ref = useOutsideClick(() => {
    setOpen(false);
    closeMenu();
  });

  const handleItemClick = () => {
    setOpen(false);
    closeMenu();
  };

  return (
    <Wrapper ref={ref} $submenu={depthLevel > 0}>
      {!depthLevel ? (
        <>
          <MenuButton
            onClick={() =>
              setMenuOpen((previousOpenState) => !previousOpenState)
            }
          >
            <MenuImage />
            <MenuTitle>{items?.title}</MenuTitle>
          </MenuButton>

          <Dropdown
            submenus={items?.submenu}
            open={menuOpen}
            depthLevel={depthLevel}
            setMenuOpen={setMenuOpen}
            closeMenu={closeMenu}
          />
        </>
      ) : (
        <DropdownItem
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          onClick={handleItemClick}
        >
          {items?.submenu ? (
            <>
              <DropdownItemLink to={items.url}>
                <DropdownItemTitle>{items.title}</DropdownItemTitle>
                <DropdownItemArrow />
              </DropdownItemLink>

              <Dropdown
                submenus={items.submenu}
                open={open}
                depthLevel={depthLevel}
                setMenuOpen={setMenuOpen}
                closeMenu={closeMenu}
              />
            </>
          ) : (
            <DropdownItemLink to={items.url}>
              <DropdownItemTitle>{items?.title}</DropdownItemTitle>
            </DropdownItemLink>
          )}
        </DropdownItem>
      )}
    </Wrapper>
  );
};
