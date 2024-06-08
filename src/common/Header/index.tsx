import { Wrapper, Content, AppInfo, AppLogo, AppName } from "./styled";

export const Header = () => {
  return (
    <Wrapper>
      <Content>
        <AppInfo>
          <AppLogo />
          <AppName>MOVIE WORLD</AppName>
        </AppInfo>
      </Content>
    </Wrapper>
  );
};
