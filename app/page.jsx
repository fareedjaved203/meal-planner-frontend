import RootLayout from "./layout";
import Summary from "../components/dashboard/Summary";
import GraphAndStats from "../components/dashboard/GraphAndStats";
import Link from "next/link";
import PlacedOrdersTable from "../components/orders/PlacedOrdersTable";
import getData from "../lib/getData";
import getOrders from "@/lib/getOrders";
import action from "./actions/action";

const Home = async () => {
  const data = await getData();
  const completedOrders = await getOrders();
  action("fetchShopifyData");
  action("fetchOrdersData");
  return (
    <RootLayout showNavbar={true}>
      <>
        <div
          className="min-h-screen min-w-full bg-gray-100 p-4"
          suppressHydrationWarning={true}
        >
          <Summary data={data} completedOrders={completedOrders} />
          <GraphAndStats data={data} completedOrders={completedOrders} />
          <div className="p-4 bg-white rounded-lg m-4 mr-0 ml-0">
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
              <PlacedOrdersTable
                data={data}
                completeOrders={completedOrders}
                size={2}
                showPagination={false}
              />
            </div>
          </div>
        </div>
      </>
    </RootLayout>
  );
};

export default Home;
