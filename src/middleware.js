import { NextResponse } from "next/server";
import { getIdUser } from "@/lib/token";

const privateRoutes = ["/users", "/transactions", "/profile", "/transfer"];
const publicRoutes = ["/login", "/register"];

/// TO BE FIXED

export default async function middleware(req) {
  const path = req.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(path);
  const isPrivateRoute = privateRoutes.includes(path);

  const user = await getIdUser();

  if (isPublicRoute && user)
    return NextResponse.redirect(new URL("/", req.nextUrl));

  if (isPrivateRoute && !user)
    return NextResponse.redirect(new URL("/login", req.nextUrl));

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
