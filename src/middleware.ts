import type { MiddlewareHandler } from "astro";

const ADMIN_PATH = "/admin";

function unauthorizedResponse() {
  return new Response("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Kamadhenu Admin"',
    },
  });
}

function parseBasicAuthHeader(headerValue: string) {
  if (!headerValue.startsWith("Basic ")) return null;

  const encoded = headerValue.slice(6);
  let decoded = "";
  try {
    decoded = atob(encoded);
  } catch {
    return null;
  }
  const separatorIndex = decoded.indexOf(":");
  if (separatorIndex === -1) return null;

  return {
    username: decoded.slice(0, separatorIndex),
    password: decoded.slice(separatorIndex + 1),
  };
}

export const onRequest: MiddlewareHandler = async (context, next) => {
  if (!context.url.pathname.startsWith(ADMIN_PATH)) {
    return next();
  }

  const adminUsername = import.meta.env.ADMIN_USERNAME;
  const adminPassword = import.meta.env.ADMIN_PASSWORD;

  if (!adminUsername || !adminPassword) {
    return new Response(
      "Admin credentials are not configured. Set ADMIN_USERNAME and ADMIN_PASSWORD.",
      { status: 500 }
    );
  }

  const authHeader = context.request.headers.get("authorization");
  if (!authHeader) {
    return unauthorizedResponse();
  }

  const parsedAuth = parseBasicAuthHeader(authHeader);
  if (!parsedAuth) {
    return unauthorizedResponse();
  }

  if (
    parsedAuth.username !== adminUsername ||
    parsedAuth.password !== adminPassword
  ) {
    return unauthorizedResponse();
  }

  // Support /admin and /admin/ by redirecting to the actual static admin entry file.
  if (context.url.pathname === "/admin" || context.url.pathname === "/admin/") {
    const target = new URL("/admin/index.html", context.url);
    return Response.redirect(target, 302);
  }

  return next();
};
