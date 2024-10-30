//import "server-only";
"use server";

import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export async function setToken(token) {
  const cookieStore = await cookies();
  cookieStore.set("token", token);
}

export async function getToken() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  return token;
}

export async function deleteToken() {
  const cookieStore = await cookies();
  cookieStore.delete("token");
}

export async function getIdUser() {
  const token = await getToken();
  if (!token) return null;

  try {
    const user = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (user.exp < currentTime) {
      await deleteToken();
      return null;
    }

    return user;
  } catch (error) {
    console.error(error);
    await deleteToken();
    return null;
  }
}
