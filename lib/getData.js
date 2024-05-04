"use server";
async function getData() {
  const options = {
    headers: {
      "X-Shopify-Access-Token": process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN,
      "Content-Type": "application/json",
    },
    next: {
      tags: ["fetchShopifyData"],
    },
  };

  const url = process.env.NEXT_PUBLIC_SHOPIFY_URL;
  const res = await fetch(url, options);
  const final = await res.json();
  return final;
}

export default getData;
