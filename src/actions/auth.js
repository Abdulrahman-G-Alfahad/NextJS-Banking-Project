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
  const users = await response.json();
  return users;
}

export async function getAllUsers() {
  const response = await fetch(`${baseUrl}/mini-project/api/auth/users`, {
    method: "GET",
    headers: await getHeaders(),
  });
  const users = await response.json();
  //console.log(users);
  return users;
}

export async function getUser() {
  const response = await fetch(`${baseUrl}/mini-project/api/auth/me`, {
    method: "GET",
    headers: await getHeaders(),
  });
  let user;
  // try {
  //   user = response.json();
  // } catch {
  //   return user;
  // }
  // Check if the response is OK before parsing JSON
  if (response.ok) {
    try {
      // Parse JSON only if the response is successful
      return await response.json();
    } catch (error) {
      console.error("Failed to parse JSON:", error);
      return null; // Return null if JSON parsing fails
    }
  } else if (response.status === 401) {
    console.log("User is not authorized");
    return null; // Return null if unauthorized
  } else {
    console.error(`Request failed with status: ${response.status}`);
    return null; // Return null for other errors
  }
}

export async function transfer(formData) {
  const data = Object.fromEntries(formData);
  //   console.log(
  //     `${baseUrl}//mini-project/api/transactions/transfer/${data.username}`
  //   );
  const username = data.username;
  delete data.username;
  const response = await fetch(
    `${baseUrl}/mini-project/api/transactions/transfer/${username}`,
    {
      method: "PUT",
      headers: await getHeaders(),
      body: JSON.stringify(data),
    }
  );

  console.log(response);

  revalidatePath("/users");
  revalidatePath("/transactions");
}

export async function UploadImage(formData) {
  const response = await fetch(`${baseUrl}/mini-project/api/auth/profile`, {
    method: "put",
    headers: await getHeaders(false),
    body: formData,
  });
  const image = await response.json();
  revalidatePath("/profile");
  redirect("/profile");
  //console.log(users);
  //return users;
}
