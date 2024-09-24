import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Define routes that require authentication
const protectedRoutes = ['/']

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl

	// Check if the pathname is in the protectedRoutes array
	if (protectedRoutes.some(route => pathname.startsWith(route))) {
		// Check for authentication (e.g., presence of an auth token)
		const token = request.cookies.get('auth_token')?.value
		
		if (!token) {
			// Redirect to login if not authenticated
			// return NextResponse.redirect(new URL('/login', request.url))
			console.log("redirect now black boy");
		}
	}

	// Continue to the requested page if authenticated or not a protected route
	return NextResponse.next()
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}