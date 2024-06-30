// import { MainPage } from "../features/MainPage";
import { Header } from "../common/Header";
import { SubPage } from "../features/SubPage";

const App = () => {
  return (
    <>
      <Header />
      {/*<MainPage />*/}
      <SubPage
        title="Popular Movies"
        endpoint="movie/popular"
        params={{ language: "en-US", page: "1" }}
        tileType="movie"
      />
    </>
  );
};

export default App;
