import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Cek apakah ada cookie "auth"
  const authCookie = request.cookies.get('auth');
  const pathname = request.nextUrl.pathname;

  // Daftar rute yang dilindungi
  const protectedRoutes = ['/home', '/marketplace', '/pesanan', '/cart', '/checkout'];
  const isProtected = protectedRoutes.some(route => pathname.startsWith(route));

  if (isProtected && !authCookie) {
    // Redirect ke halaman login jika belum auth
    const url = new URL('/login', request.url);
    // Simpan return url untuk kembali setelah login
    url.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(url);
  }

  // Jika sudah login dan mencoba mengakses halaman awal, arahkan ke /home
  if (pathname === '/' && authCookie) {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/home',
    '/home/:path*',
    '/marketplace/:path*',
    '/pesanan/:path*',
    '/cart/:path*',
    '/checkout/:path*',
  ],
};
