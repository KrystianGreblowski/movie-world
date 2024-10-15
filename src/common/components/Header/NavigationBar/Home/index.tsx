import { AppInfo, AppLogo, AppName } from "./styled";
import { toMainPage } from "../../../../../core/routes";

export const Home = () => {
  return (
    <AppInfo to={toMainPage()}>
      <AppLogo />
      <AppName>MOVIE WORLD</AppName>
    </AppInfo>
  );
};
