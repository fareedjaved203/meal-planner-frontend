"use server";
async function getOrders() {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      tags: ["fetchOrdersData"],
    },
  };

  const url = process.env.NEXT_PUBLIC_ORDERS;
  const res = await fetch(url, options);
  const final = await res.json();
  return final;
}

export default getOrders;
