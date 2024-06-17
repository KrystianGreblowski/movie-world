import styled, { css } from "styled-components";
import { ReactComponent as ArrowRight } from "../../../images/arrow-right.svg";

interface DropDownListProps {
  $asideList?: boolean;
}

export const DropDownListContainer = styled.ul<DropDownListProps>`
  list-style-type: none;
  margin: 0;
  position: absolute;
  top: 50px;
  border: 1px solid ${({ theme }) => theme.color.scorpion};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.codGray};
  padding: 6px 0;

  ${({ $asideList }) =>
    $asideList &&
    css`
      left: 118px;
    `}
`;

export const DropDownItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 38px;
  width: 118px;
  padding: 0 12px;
  transition: background-color 0.4s;
  background-color: inherit;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.mineShaft};
  }
`;

export const DropDownItemText = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
`;

export const DropDownItemImage = styled(ArrowRight)`
  width: 12px;
  height: 16px;
`;
