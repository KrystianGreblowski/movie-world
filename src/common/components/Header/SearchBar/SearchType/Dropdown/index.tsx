import {
  DropdownItemsContainer,
  DropdownItem,
  DropdownItemButton,
  DropdownItemTitle,
} from "./styled";
import { SearchTypeItemsData } from "../searchTypeItemsData";

interface DropdownProps {
  items: SearchTypeItemsData[];
  open: boolean;
  onGetSearchTypeTitle: (data: number) => void;
}

export const Dropdown = ({
  items,
  open,
  onGetSearchTypeTitle,
}: DropdownProps) => {
  const onClickHandler = (index: number) => onGetSearchTypeTitle(index);

  return (
    <DropdownItemsContainer $open={open}>
      {items.map((item, index) => (
        <DropdownItem key={index}>
          <DropdownItemButton onClick={() => onClickHandler(index)}>
            <DropdownItemTitle>{item.title}</DropdownItemTitle>
          </DropdownItemButton>
        </DropdownItem>
      ))}
    </DropdownItemsContainer>
  );
};
