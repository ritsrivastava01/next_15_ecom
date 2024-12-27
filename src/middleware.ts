// import { NextRequest, NextResponse } from 'next/server';

// const protectedRoutes = ['/admin', '/dashboard'];

// const isValidToken = (token: string | null) => {
//   return !!token;
// };

// export const middleware = (request: NextRequest) => {
//   console.log(request.nextUrl.pathname);
//   if (protectedRoutes.includes(request.nextUrl.pathname)) {
//     if (!isValidToken(request.headers.get('authorization'))) {
//       return NextResponse.redirect(
//         new URL('/login', request.nextUrl.origin).href
//       );
//     }
//   }
//   const response = NextResponse.next();
//   response.headers.set('x-custom-header', 'hello world');
//   response.cookies.set('my-cookies', 'cookkies123');
//   return response;
// };

// export const config = {
//   matcher: [
//     // Match all routes except for:
//     // - API routes (any route that starts with `/api`)
//     // - Static files (any route that starts with `/_next`)
//     // - Image files (any route that ends with `.png`, `.jpg`, `.jpeg`, `.gif`, `.svg`)
//     '/((?!api|_next/static|_next/image|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.svg).*)'
//   ] //['/admin', '/dashboard']
// };

import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(de|en)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};
