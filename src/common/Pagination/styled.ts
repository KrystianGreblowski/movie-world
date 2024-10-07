import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const ChangePageButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.color.doveGray};
  color: ${({ theme }) => theme.color.white};
  padding: 6px 12px;
  margin-right: 8px;
  border-radius: 2px;
  font-size: 16px;
  font-weight: 400;
  transition: filter 0.3s;

  &:hover {
    cursor: pointer;
    filter: brightness(1.3);
  }

  &:disabled {
    cursor: auto;
    filter: none;
    background-color: ${({ theme }) => theme.color.mineShaftDark};
  }
`;

export const PageNumberInfo = styled.p`
  padding: 0;
  margin: 0 8px 0 0;
  font-size: 14px;
`;
