import { DropdownItemsContainer, DropdownItem, Image, Title } from "./styled";

interface DropdownItemsProps {
  items: string[];
  open: boolean;
}

export const DropdownItems = ({ items, open }: DropdownItemsProps) => {
  return (
    <DropdownItemsContainer $open={open}>
      {items.map((title, index) => (
        <DropdownItem key={index}>
          <Title>{title}</Title>
          <Image />
        </DropdownItem>
      ))}
    </DropdownItemsContainer>
  );
};
