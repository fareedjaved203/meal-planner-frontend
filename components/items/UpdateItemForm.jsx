"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { message } from "antd";
import { getSingleItemApi, updateItemApi } from "@/api/items/itemsApi";
import { useRouter } from "next/navigation";
import action from "@/app/actions/action";

const UpdateItemForm = ({ itemData }) => {
  const params = useParams().id;
  const router = useRouter();
  const [nameLine1, setNameLine1] = useState("");
  const [nameLine2, setNameLine2] = useState("");
  const [preparationTime, setPreparationTime] = useState("");
  const [spiciness, setSpiciness] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [origin, setOrigin] = useState("");
  const [diet, setDiet] = useState("");
  const [ingredients, setIngredients] = useState([{ value: "", input: false }]);
  const [steps, setSteps] = useState([{ value: "", input: false }]);
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getItem = async () => {
      const data = itemData;
      console.log(data);
      setNameLine1(data.item?.nameLine1);
      setNameLine2(data.item?.nameLine2);
      setPreparationTime(data.item?.preparationTime);
      setSpiciness(data.item?.spiciness);
      setDifficulty(data.item?.difficulty);
      setDiet(data.item?.diet);
      setOrigin(data.item?.origin);
      setIngredients(
        data.item?.ingredients?.map((ingredient) => ({
          ...ingredient,
          input: false,
        }))
      );
      setSteps(data.item?.steps?.map((step) => ({ ...step, input: false })));
    };
    getItem();
  }, []);

  const addIngredient = () => {
    setIngredients([...ingredients, { value: "", input: false }]);
  };

  const removeIngredient = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const handleInputChange = (e, index) => {
    const newIngredients = [...ingredients];
    newIngredients[index].value = e.target.value;
    setIngredients(newIngredients);
  };

  const handleInputToggle = (index) => {
    const newIngredients = [...ingredients];
    newIngredients[index].input = !newIngredients[index].input;
    setIngredients(newIngredients);
  };

  const addStep = () => {
    setSteps([...steps, { value: "", input: false }]);
  };

  const removeStep = (index) => {
    setSteps(steps.filter((_, i) => i !== index));
  };

  const handleStepInputChange = (e, index) => {
    const newSteps = [...steps];
    newSteps[index].value = e.target.value;
    setSteps(newSteps);
  };

  const handleStepInputToggle = (index) => {
    const newSteps = [...steps];
    newSteps[index].input = !newSteps[index].input;
    setSteps(newSteps);
  };

  const addItemHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    let mappedIngredients = ingredients.map((ingredient) => ({
      value: ingredient.value,
    }));
    let mappedSteps = steps.map((step) => ({ value: step.value }));

    const formData = {
      nameLine1,
      nameLine2,
      preparationTime,
      spiciness,
      difficulty,
      origin,
      diet,
      steps: mappedSteps,
      ingredients: mappedIngredients,
    };
    console.log(formData);
    const data = await updateItemApi(params, formData);
    if (data) {
      console.log(data);
      setLoading(false);
      messageApi.success("Item Updated Successfully");
      action("fetchItemsData");
      setTimeout(() => {
        router.replace("/items");
      }, 1000);
    }
    console.log(data);
  };
  return (
    <>
      {contextHolder}
      <form
        className="bg-white m-4 rounded p-4 pt-3"
        onSubmit={(e) => addItemHandler(e)}
      >
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
            <div className="pb-4">
              Enter the name or an addition to your recipe here (e.g.
              spaghetti):
            </div>
            <div>
              <input
                type="text"
                value={nameLine1}
                required
                onChange={(e) => setNameLine1(e.target.value)}
                className="bg-custom w-full rounded h-10 p-7"
              />
            </div>
          </div>
          <div className="p-4">
            <div className="font-font-mulish" style={{ fontWeight: "900" }}>
              Name Line 2
            </div>
            <div className="pb-4">
              Enter the name or an addition to your recipe here (e.g.
              Carbonara):
            </div>
            <div>
              <input
                type="text"
                value={nameLine2}
                required
                onChange={(e) => setNameLine2(e.target.value)}
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
            <div className="pb-4">
              Enter the preparation time including time unit here (e.g. 30 min /
              1 hour):
            </div>
            <div>
              <input
                type="text"
                value={preparationTime}
                required
                onChange={(e) => setPreparationTime(e.target.value)}
                className="bg-custom w-full rounded h-10 p-7"
              />
            </div>
          </div>
          <div className="p-4">
            <div className="font-font-mulish" style={{ fontWeight: "900" }}>
              Level of Spiciness
            </div>
            <div className="pb-4">
              Enter the level of spiciness here (e.g. mild / spicy / hot / very
              hot):
            </div>
            <div>
              <input
                type="text"
                value={spiciness}
                required
                onChange={(e) => setSpiciness(e.target.value)}
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
            <div className="pb-4">
              Enter the level of difficulty for this recipe here (e.g. easy /
              medium / hard):
            </div>
            <div>
              <input
                type="text"
                value={difficulty}
                required
                onChange={(e) => setDifficulty(e.target.value)}
                className="bg-custom w-full rounded h-10 p-7"
              />
            </div>
          </div>
          <div className="p-4">
            <div className="font-font-mulish" style={{ fontWeight: "900" }}>
              Origin
            </div>
            <div className="pb-4">
              Select the country of origin of the recipe (e.g. if you are not
              sure, select World Dish or Continental):
            </div>
            <div>
              <input
                type="text"
                value={origin}
                required
                onChange={(e) => setOrigin(e.target.value)}
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
            <div className="pb-4">
              Enter here whether the dish corresponds to a specific diet or
              which animal products are used (e.g. vegan, vegetarian, halal,
              mixed, chicken, beef, gluten-free, etc):
            </div>
            <div>
              <input
                type="text"
                value={diet}
                required
                onChange={(e) => setDiet(e.target.value)}
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
        {ingredients.map((ingredient, index) => (
          <div className="flex justify-center items-center p-4" key={index}>
            <input
              type="text"
              placeholder="sugar"
              value={ingredient.value}
              required
              onChange={(e) => handleInputChange(e, index)}
              disabled={ingredient.input}
              className="bg-custom w-[92%] rounded h-10 p-7"
            />
            <Image
              src={ingredient.input ? `/Group 11068.svg` : `/tick.svg`}
              width={40}
              height={40}
              className="ml-2 mr-2 cursor-pointer"
              alt="image"
              onClick={() => handleInputToggle(index)}
              priority={false}
            />
            <Image
              src="/close.svg"
              className="cursor-pointer"
              width={40}
              height={40}
              alt="image"
              onClick={() => removeIngredient(index)}
              priority={false}
            />
          </div>
        ))}
        <div className="flex justify-center items-center p-4 cursor-pointer">
          <div
            className="bg-custom w-full rounded h-15 p-6 flex justify-center items-center text-purpleText font-semibold border border-dashed border-purpleText border-2"
            onClick={addIngredient}
          >
            Add Ingredients
          </div>
        </div>

        <div
          className="text-2xl font-mulish p-4 mt-4"
          style={{ fontWeight: "900" }}
        >
          Steps
        </div>
        {steps.map((step, index) => (
          <div className="flex justify-center items-center p-4" key={index}>
            <input
              type="text"
              placeholder="boil water"
              value={step.value}
              required
              onChange={(e) => handleStepInputChange(e, index)}
              disabled={step.input}
              className="bg-custom w-[92%] rounded h-10 p-7"
            />
            <Image
              src={step.input ? `/Group 11068.svg` : `/tick.svg`}
              width={40}
              height={40}
              className="ml-2 mr-2 cursor-pointer"
              alt="image"
              onClick={() => handleStepInputToggle(index)}
              priority={false}
            />
            <Image
              src="/close.svg"
              className="cursor-pointer"
              width={40}
              height={40}
              alt="image"
              onClick={() => removeStep(index)}
              priority={false}
            />
          </div>
        ))}
        <div className="flex justify-center items-center p-4 cursor-pointer">
          <div
            className="bg-custom w-full rounded h-15 p-6 flex justify-center items-center text-purpleText font-semibold border border-dashed border-purpleText border-2"
            onClick={addStep}
          >
            Add Steps
          </div>
        </div>

        <div className="flex justify-center items-center mt-4 p-4 cursor-pointer">
          <button
            type="submit"
            className={`bg-purpleText w-full rounded h-15 p-4 mt-4 flex justify-center items-center text-white font-semibold ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Item"}
          </button>
        </div>
      </form>
    </>
  );
};

export default UpdateItemForm;
