import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const token: any = request.cookies.get('MyTokenCookie');

  if (token === undefined) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    await fetch(
      'https://utec-timestamp-rebuild.onrender.com/api/v1/login/validation/token',

      {
        mode: 'cors',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token.value,
        },
      }
    );

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/private/:path*'],
};
