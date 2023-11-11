import { NextResponse } from "next/server";

/**
 * This function can be marked `async` if using `await` inside
 * @param {*} request
 * @return {NextResponse}
 */
export function middleware(request) {
  return NextResponse.redirect(new URL("/dashboard", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - auth (authentication routes)
     * - admin (admin routes)
     * - public (static files)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!dashboard|public|_next/static|_next/image|favicon.ico).*)",
  ],
};
