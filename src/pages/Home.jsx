import BreakingNews from "../components/BreakingNews";
import Header from "../components/Header";
import LeftSideNav from "../components/LeftSideNav";
import NavBar from "../components/NavBar";
import RightSideNav from "../components/RightSideNav";

const Home = () => {
  return (
    <div>
      <Header />
      <BreakingNews />
      <NavBar />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div>
          <LeftSideNav />
        </div>
        <div className="lg:col-span-2">
          <h1 className="text-6xl">This is News</h1>
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
