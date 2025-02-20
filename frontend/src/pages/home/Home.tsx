import Banner from "./Banner";
import Recommened from "./Recommened";
import TopSellers from "./TopSellers";

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <TopSellers />
      <Recommened />
    </>
  );
};

export default Home;
