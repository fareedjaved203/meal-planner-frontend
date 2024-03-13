import RootLayout from "../../layout";
import { IoIosArrowRoundBack } from "react-icons/io";
import Image from "next/image";

const ItemsId = () => {
  return (
    <RootLayout showNavbar={true}>
      <>
        <div className="flex items-center justify-start w-full pl-4 mt-4">
          <div>
            <IoIosArrowRoundBack className="text-3xl" />
          </div>
          <div className="font-bold ml-4 mr-4">Back</div>
          <div className="flex-grow pr-4 mr-4">
            <hr />
          </div>
        </div>
        <div className="bg-white m-4 rounded p-4 pt-1">
          <div className="text-2xl font-bold p-4 mt-4">Item Details</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full">
            <div className="p-4">
              <div className="font-bold">Name Line 1</div>
              <p className="pb-4">
                Enter the name or an addition to your recipe here (e.g.
                spaghetti):
              </p>
              <div>
                <input
                  type="text"
                  value="test@gmail.com"
                  className="bg-indigo-100 w-full rounded h-10 p-4"
                />
              </div>
            </div>
            <div className="p-4">
              <div className="font-bold">Name Line 2</div>
              <p className="pb-4">
                Enter the name or an addition to your recipe here (e.g.
                Carbonara):
              </p>
              <div>
                <input
                  type="text"
                  value="12 Dec 2023"
                  className="bg-indigo-100 w-full rounded h-10 p-4"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full">
            <div className="p-4">
              <div className="font-bold">Preparation Time</div>
              <p className="pb-4">
                Enter the preparation time including time unit here (e.g. 30 min
                / 1 hour):
              </p>
              <div>
                <input
                  type="text"
                  value="test@gmail.com"
                  className="bg-indigo-100 w-full rounded h-10 p-4"
                />
              </div>
            </div>
            <div className="p-4">
              <div className="font-bold">Level of Spiciness</div>
              <p className="pb-4">
                Enter the level of spiciness here (e.g. mild / spicy / hot /
                very hot):
              </p>
              <div>
                <input
                  type="text"
                  value="12 Dec 2023"
                  className="bg-indigo-100 w-full rounded h-10 p-4"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full">
            <div className="p-4">
              <div className="font-bold">Level of Difficulty</div>
              <p className="pb-4">
                Enter the level of difficulty for this recipe here (e.g. easy /
                medium / hard):
              </p>
              <div>
                <input
                  type="text"
                  value="test@gmail.com"
                  className="bg-indigo-100 w-full rounded h-10 p-4"
                />
              </div>
            </div>
            <div className="p-4">
              <div className="font-bold">Origin</div>
              <p className="pb-4">
                Select the country of origin of the recipe (e.g. if you are not
                sure, select World Dish or Continental):
              </p>
              <div>
                <input
                  type="text"
                  value="12 Dec 2023"
                  className="bg-indigo-100 w-full rounded h-10 p-4"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full">
            <div className="p-4">
              <div className="font-bold">Diet</div>
              <p className="pb-4">
                Enter here whether the dish corresponds to a specific diet or
                which animal products are used (e.g. vegan, vegetarian, halal,
                mixed, chicken, beef, gluten-free, etc):
              </p>
              <div>
                <input
                  type="text"
                  value="test@gmail.com"
                  className="bg-indigo-100 w-full rounded h-10 p-4"
                />
              </div>
            </div>
          </div>

          <div className="text-2xl font-bold p-4 mt-4">Ingredients</div>
          <div>
            <div className="flex justify-center items-center p-4">
              <input
                type="text"
                value="test@gmail.com"
                className="bg-indigo-100 w-[90%] rounded h-10 p-4"
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
                className="bg-indigo-100 w-[90%] rounded h-10 p-4"
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
              <div className="bg-indigo-100 w-full rounded h-15 p-4 flex justify-center items-center text-indigo-700 font-semibold border border-dashed border-indigo-700 border-2">
                Add Ingredients
              </div>
            </div>
          </div>

          <div className="text-2xl font-bold p-4 mt-4">Steps</div>
          <div>
            <div className="flex justify-center items-center p-4">
              <input
                type="text"
                value="test@gmail.com"
                className="bg-indigo-100 w-[90%] rounded h-10 p-4"
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
                className="bg-indigo-100 w-[90%] rounded h-10 p-4"
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
              <div className="bg-indigo-100 w-full rounded h-15 p-4 flex justify-center items-center text-indigo-700 font-semibold border border-dashed border-indigo-700 border-2">
                Add Ingredients
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-4 p-4">
            <div className="bg-indigo-700 w-full rounded h-15 p-4 mt-4 flex justify-center items-center text-white font-semibold">
              Add Item
            </div>
          </div>
        </div>
      </>
    </RootLayout>
  );
};

export default ItemsId;
