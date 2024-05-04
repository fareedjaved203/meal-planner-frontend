"use server";
async function getItems() {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      tags: ["fetchItemsData"],
    },
  };

  const url = process.env.NEXT_PUBLIC_ITEMS;
  const res = await fetch(url, options);
  const final = await res.json();
  return final;
}

export default getItems;
