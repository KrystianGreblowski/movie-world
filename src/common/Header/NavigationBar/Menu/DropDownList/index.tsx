import {
  DropDownListContainer,
  DropDownItem,
  DropDownItemImage,
  DropDownItemText,
} from "./styled";

interface DropDownListProps {
  listItems: string[];
}

export const DropDownList = ({ listItems }: DropDownListProps) => {
  return (
    <DropDownListContainer>
      {listItems.map((title, index) => (
        <DropDownItem key={index}>
          <DropDownItemText>{title}</DropDownItemText>
          <DropDownItemImage />
        </DropDownItem>
      ))}
    </DropDownListContainer>
  );
};
