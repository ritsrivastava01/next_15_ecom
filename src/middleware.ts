import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes = ['/admin', '/dashboard'];

const isValidToken = (token: string | null) => {
  return !!token;
};

export const middleware = (request: NextRequest) => {
  console.log(request.nextUrl.pathname);
  if (protectedRoutes.includes(request.nextUrl.pathname)) {
    if (!isValidToken(request.headers.get('authorization'))) {
      return NextResponse.redirect(
        new URL('/login', request.nextUrl.origin).href
      );
    }
  }
  const response = NextResponse.next();
  response.headers.set('x-custom-header', 'hello world');
  response.cookies.set('my-cookies', 'cookkies123');
  return response;
};

export const config = {
  matcher: [
    // Match all routes except for:
    // - API routes (any route that starts with `/api`)
    // - Static files (any route that starts with `/_next`)
    // - Image files (any route that ends with `.png`, `.jpg`, `.jpeg`, `.gif`, `.svg`)
    '/((?!api|_next/static|_next/image|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.svg).*)'
  ] //['/admin', '/dashboard']
};
