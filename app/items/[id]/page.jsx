import RootLayout from "../../layout";
import { IoIosArrowRoundBack } from "react-icons/io";
import BackButton from "../../../components/shared/BackButton";
import Image from "next/image";

const ItemsId = () => {
  return (
    <RootLayout showNavbar={true}>
      <>
        <BackButton />
        <div className="bg-white m-4 rounded p-4 pt-3">
          <div
            className="p-4 font-mulish"
            style={{ fontSize: "28px", fontWeight: "900" }}
          >
            Item Details
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full">
            <div className="p-4">
              <div className="font-mulish" style={{ fontWeight: "900" }}>
                Name Line 1
              </div>
              <p className="pb-4">
                Enter the name or an addition to your recipe here (e.g.
                spaghetti):
              </p>
              <div>
                <input
                  type="text"
                  value="test@gmail.com"
                  className="bg-custom w-full rounded h-10 p-7"
                />
              </div>
            </div>
            <div className="p-4">
              <div className="font-font-mulish" style={{ fontWeight: "900" }}>
                Name Line 2
              </div>
              <p className="pb-4">
                Enter the name or an addition to your recipe here (e.g.
                Carbonara):
              </p>
              <div>
                <input
                  type="text"
                  value="12 Dec 2023"
                  className="bg-custom w-full rounded h-10 p-7"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full">
            <div className="p-4">
              <div className="font-font-mulish" style={{ fontWeight: "900" }}>
                Preparation Time
              </div>
              <p className="pb-4">
                Enter the preparation time including time unit here (e.g. 30 min
                / 1 hour):
              </p>
              <div>
                <input
                  type="text"
                  value="test@gmail.com"
                  className="bg-custom w-full rounded h-10 p-7"
                />
              </div>
            </div>
            <div className="p-4">
              <div className="font-font-mulish" style={{ fontWeight: "900" }}>
                Level of Spiciness
              </div>
              <p className="pb-4">
                Enter the level of spiciness here (e.g. mild / spicy / hot /
                very hot):
              </p>
              <div>
                <input
                  type="text"
                  value="12 Dec 2023"
                  className="bg-custom w-full rounded h-10 p-7"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full">
            <div className="p-4">
              <div className="font-font-mulish" style={{ fontWeight: "900" }}>
                Level of Difficulty
              </div>
              <p className="pb-4">
                Enter the level of difficulty for this recipe here (e.g. easy /
                medium / hard):
              </p>
              <div>
                <input
                  type="text"
                  value="test@gmail.com"
                  className="bg-custom w-full rounded h-10 p-7"
                />
              </div>
            </div>
            <div className="p-4">
              <div className="font-font-mulish" style={{ fontWeight: "900" }}>
                Origin
              </div>
              <p className="pb-4">
                Select the country of origin of the recipe (e.g. if you are not
                sure, select World Dish or Continental):
              </p>
              <div>
                <input
                  type="text"
                  value="12 Dec 2023"
                  className="bg-custom w-full rounded h-10 p-7"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full">
            <div className="p-4">
              <div className="font-font-mulish" style={{ fontWeight: "900" }}>
                Diet
              </div>
              <p className="pb-4">
                Enter here whether the dish corresponds to a specific diet or
                which animal products are used (e.g. vegan, vegetarian, halal,
                mixed, chicken, beef, gluten-free, etc):
              </p>
              <div>
                <input
                  type="text"
                  value="test@gmail.com"
                  className="bg-custom w-full rounded h-10 p-7"
                />
              </div>
            </div>
          </div>

          <div
            className="text-2xl font-mulish p-4 mt-4"
            style={{ fontWeight: "900" }}
          >
            Ingredients
          </div>
          <div>
            <div className="flex justify-center items-center p-4">
              <input
                type="text"
                value="test@gmail.com"
                className="bg-custom w-[92%] rounded h-10 p-7"
              />
              <Image
                src="/Group 11068.png"
                width={40}
                height={40}
                className="ml-2"
                alt="image"
              />
              <Image
                src="/close-square.png"
                width={50}
                height={50}
                alt="image"
              />
            </div>

            <div className="flex justify-center items-center p-4">
              <input
                type="text"
                value="test@gmail.com"
                className="bg-custom w-[92%] rounded h-10 p-7"
              />
              <Image
                src="/tick.png"
                width={40}
                height={40}
                className="ml-2"
                alt="image"
              />
              <Image
                src="/close-square.png"
                width={50}
                height={50}
                alt="image"
              />
            </div>

            <div className="flex justify-center items-center p-4">
              <div className="bg-custom w-full rounded h-15 p-6 flex justify-center items-center text-purpleText font-semibold border border-dashed border-purpleText border-2">
                Add Ingredients
              </div>
            </div>
          </div>

          <div
            className="text-2xl font-mulish p-4 mt-4"
            style={{ fontWeight: "900" }}
          >
            Steps
          </div>
          <div>
            <div className="flex justify-center items-center p-4">
              <input
                type="text"
                value="test@gmail.com"
                className="bg-custom w-[92%] rounded h-10 p-7"
              />
              <Image
                src="/Group 11068.png"
                width={40}
                height={40}
                className="ml-2"
                alt="image"
              />
              <Image
                src="/close-square.png"
                width={50}
                height={50}
                alt="image"
              />
            </div>

            <div className="flex justify-center items-center p-4">
              <input
                type="text"
                value="test@gmail.com"
                className="bg-custom w-[92%] rounded h-10 p-7"
              />
              <Image
                src="/tick.png"
                width={40}
                height={40}
                className="ml-2"
                alt="image"
              />
              <Image
                src="/close-square.png"
                width={50}
                height={50}
                alt="image"
              />
            </div>

            <div className="flex justify-center items-center p-4">
              <div className="bg-custom w-full rounded h-15 p-6 flex justify-center items-center text-purpleText font-semibold border border-dashed border-purpleText border-2">
                Add Ingredients
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-4 p-4">
            <div className="bg-purpleText w-full rounded h-15 p-4 mt-4 flex justify-center items-center text-white font-semibold">
              Add Item
            </div>
          </div>
        </div>
      </>
    </RootLayout>
  );
};

export default ItemsId;
