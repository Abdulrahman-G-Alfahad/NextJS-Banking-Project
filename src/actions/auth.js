"use server";

import { revalidatePath } from "next/cache";

import { baseUrl, getHeaders } from "./config";
import { redirect } from "next/navigation";
import { deleteToken, setToken } from "@/lib/token";

// TO BE FIXED <-----------------------------------------

export async function login(formData) {
  const userData = Object.fromEntries(formData);
  console.log(userData);

  const response = await fetch(`${baseUrl}/mini-project/api/auth/login`, {
    method: "POST",
    headers: await getHeaders(),
    body: JSON.stringify(userData),
  });

  const { token } = await response.json();
  await setToken(token);

  revalidatePath("/"); //<----------------
  redirect("/"); //<----------------
}

export async function register(formData) {
  const data = new FormData();
  data.append("username", formData.username);
  data.append("password", formData.password);
  data.append("image", formData.image);
  const response = await fetch(`${baseUrl}/mini-project/api/auth/register`, {
    method: "POST",
    body: data,
  });

  const { token } = await response.json();
  console.log(token);
  await setToken(token);

  revalidatePath("/users");

  revalidatePath("/"); //<----------------
  redirect("/"); //<----------------
}

export async function logout() {
  await deleteToken();
  redirect("/");
}

export async function getTransactions() {
  const response = await fetch(`${baseUrl}/mini-project/api/transactions/my`, {
    method: "GET",
    headers: await getHeaders(),
  });
  const users = response.json();
  return users;
}

export async function getAllUsers() {
  const response = await fetch(`${baseUrl}/mini-project/api/auth/users`, {
    method: "GET",
    headers: await getHeaders(),
  });
  const users = response.json();
  console.log(users);
  return users;
}
