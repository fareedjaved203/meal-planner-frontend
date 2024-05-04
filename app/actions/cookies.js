"use server";

import { cookies } from "next/headers";

export async function createUser(data) {
  const oneDay = 24 * 60 * 60 * 1000;
  cookies().set("user", JSON.stringify(data), {
    expires: new Date(Date.now() + oneDay),
    secure: true,
  });
}

export async function deleteUser() {
  cookies().delete("user");
}

export async function getUser() {
  const data = cookies().get("user");
  let user;
  if (data) {
    user = JSON.parse(data?.value);
  }
  return user;
}
