import RootLayout from "./layout";
import Summary from "../components/dashboard/Summary";
import GraphAndStats from "../components/dashboard/GraphAndStats";

const Home = () => {
  return (
    <RootLayout showNavbar={true}>
      <>
        <div className="h-screen w-full bg-gray-100 p-4">
          <Summary />
          <GraphAndStats />
        </div>
      </>
    </RootLayout>
  );
};

export default Home;
