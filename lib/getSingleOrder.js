"use server";
async function getSingleOrder(id) {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      tags: ["fetchOrderData"],
    },
  };

  const url = `${process.env.NEXT_PUBLIC_SINGLE_ORDER}/${id}`;
  const res = await fetch(url, options);
  const final = await res.json();
  return final;
}

export default getSingleOrder;
