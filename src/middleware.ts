import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Protect patient portal and appointment management routes
  if (pathname.startsWith('/portal') || pathname.startsWith('/telemedicine/session')) {
    const token = request.cookies.get('next-auth.session-token') || request.cookies.get('careplus-auth-token');
    
    if (!token) {
      const loginUrl = new URL('/portal', request.url);
      loginUrl.searchParams.set('callbackUrl', encodeURIComponent(pathname));
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/portal/:path*', '/telemedicine/session/:path*'],
};
