import { ReactNode } from "react";
import { Container, Url, Icon } from "./styled";

interface LinkProps {
  name: string;
  url: string;
  icon: ReactNode;
}

export const Link = ({ name, url, icon }: LinkProps) => {
  return (
    <Container>
      <Icon href={url} target="_blank">
        {icon}
      </Icon>
      <Url href={url} target="_blank">
        {name}
      </Url>
    </Container>
  );
};
