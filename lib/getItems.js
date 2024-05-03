"use server";
async function getItems() {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 1,
    },
  };

  const url = process.env.NEXT_PUBLIC_ITEMS;
  const res = await fetch(url, options);
  const final = await res.json();
  return final;
}

export default getItems;
