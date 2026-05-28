import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // защитаваме /admin
  if (url.pathname.startsWith("/admin")) {
    const auth = req.headers.get("authorization");

    if (!auth) {
      return new Response("Unauthorized", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Secure Area"',
        },
      });
    }

    const base64 = auth.split(" ")[1];
    const decoded = atob(base64);
    const [user, pass] = decoded.split(":");

    if (
      user !== process.env.ADMIN_USER ||
      pass !== process.env.ADMIN_PASS
    ) {
      return new Response("Access Denied", { status: 403 });
    }
  }

  return NextResponse.next();
}