"use server";

import { cookies } from "next/headers";

export async function createUser(data) {
  cookies().set("user", JSON.stringify(data), { secure: true });
}

export async function deleteUser() {
  cookies().delete("user");
  console.log("helloo??");
}

export async function getUser() {
  const data = cookies().get("user");
  const user = JSON.parse(data.value);
  return user;
}
