import RootLayout from "./layout";
import Summary from "../components/dashboard/Summary";
import GraphAndStats from "../components/dashboard/GraphAndStats";
import DashboardTable from "../components/dashboard/DashboardTable";
import Link from "next/link";

const Home = () => {
  return (
    <RootLayout showNavbar={true}>
      <>
        <div
          className="min-h-screen min-w-full bg-gray-100 p-4"
          suppressHydrationWarning={true}
        >
          <Summary />
          <GraphAndStats />
          <div className="p-4 bg-white rounded m-4 mr-0 ml-0">
            <div className="flex flex-col sm:flex-row justify-between p-4">
              <div
                className="pb-1 mr-4 font-mulish"
                style={{ fontSize: "28px", fontWeight: "900" }}
              >
                Orders Placed
              </div>
              <Link href="/placed-orders">
                <div
                  className="text-summaryTextColor font-poppins"
                  style={{
                    fontSize: "17px",
                    marginRight: "4px",
                    paddingTop: "10px",
                  }}
                >
                  view all
                </div>
              </Link>
            </div>
            <div className="p-4">
              <DashboardTable />
            </div>
          </div>
        </div>
      </>
    </RootLayout>
  );
};

export default Home;
