"use server";

import { revalidatePath } from "next/cache";

import { baseUrl, getHeaders } from "./config";
import { redirect } from "next/navigation";
import { deleteToken, setToken } from "@/lib/token";

// TO BE FIXED <-----------------------------------------

export async function login(formData) {
  const userData = Object.fromEntries(formData);
  //console.log(userData);

  const response = await fetch(`${baseUrl}/mini-project/api/auth/login`, {
    method: "POST",
    headers: await getHeaders(),
    body: JSON.stringify(userData),
  });
  console.log(response);

  const { token } = await response.json();
  await setToken(token);

  revalidatePath("/"); //<----------------
  redirect("/"); //<----------------
}

export async function register(formData) {
  const response = await fetch(`${baseUrl}/mini-project/api/auth/register`, {
    method: "POST",
    body: formData,
  });

  const { token } = await response.json();
  //console.log(token);
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
  return users;
}

export async function getUser() {
  const response = await fetch(`${baseUrl}/mini-project/api/auth/me`, {
    method: "GET",
    headers: await getHeaders(),
  });
  const users = response.json();
  return users;
}

export async function transfer(formData) {
  console.log(formData);
}
