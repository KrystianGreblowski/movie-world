import { AppInfo, AppLogo, AppName } from "./styled";
import { toMainPage } from "../../../../core/routes";

export const Home = () => {
  return (
    <AppInfo href={toMainPage()}>
      <AppLogo />
      <AppName>MOVIE WORLD</AppName>
    </AppInfo>
  );
};
