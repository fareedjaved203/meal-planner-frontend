"use server";
async function getSingleItem(id) {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      tags: ["fetchItemData"],
    },
  };

  const url = `${process.env.NEXT_PUBLIC_SINGLE_ITEM}/${id}`;
  const res = await fetch(url, options);
  const final = await res.json();
  return final;
}

export default getSingleItem;
