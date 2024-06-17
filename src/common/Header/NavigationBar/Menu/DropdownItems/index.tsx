import { DropdownItemsContainer, DropdownItem, Image, Title } from "./styled";

interface DropdownItemsProps {
  items: string[];
}

export const DropdownItems = ({ items }: DropdownItemsProps) => {
  return (
    <DropdownItemsContainer>
      {items.map((title, index) => (
        <DropdownItem key={index}>
          <Title>{title}</Title>
          <Image />
        </DropdownItem>
      ))}
    </DropdownItemsContainer>
  );
};
