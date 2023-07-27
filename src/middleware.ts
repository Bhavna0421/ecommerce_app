import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
export async function middleware(request: NextRequest, _next: NextFetchEvent) {
  const { pathname } = request.nextUrl;
  const protectedPaths = ["/adminpage"];
  const matchesProtectedPath = protectedPaths.some((path) =>
    pathname.startsWith(path)
  );
  if (matchesProtectedPath) {
    const token = await getToken({ req: request });
    console.log("token>>>>>>>>",token)
    if (token===null) {
      const url = new URL(`/adminpage`, request.url);
    //   url.searchParams.set("callbackUrl ", encodeURI(request.url));
      return NextResponse.redirect(url);
    }
    if (token.role !== "admin") {
      const url = new URL(`/main`, request.url);
      return NextResponse.rewrite(url);
    }
  }
  return NextResponse.next();
}