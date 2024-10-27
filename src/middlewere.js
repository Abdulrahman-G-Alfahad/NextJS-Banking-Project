import { NextResponse } from "next/server";
import { getUser } from "./lib/token";

const privateRoutes = ["/users", "/notes"];
const publicRoutes = ["/login", "/register"];

/// TO BE FIXED

export default async function middleware(req) {
  const path = req.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(path);
  const isPrivateRoute = privateRoutes.includes(path);

  const user = await getUser();

  // Redirect to `/login` if a page is private!
  if (isPublicRoute && user)
    return NextResponse.redirect(new URL("/notes", req.nextUrl));

  if (isPrivateRoute && !user)
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  // Redirect to `/notes` if a page is public-only

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
