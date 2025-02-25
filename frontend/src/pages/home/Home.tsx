import Banner from "./Banner";
import News from "./News";
import Recommened from "./Recommened";
import TopSellers from "./TopSellers";

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <TopSellers />
      <Recommened />
      <News />
    </>
  );
};

export default Home;
