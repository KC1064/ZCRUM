import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/onboarding(.*)",
  "/organisation(.*)",
  "/projects(.*)",
  "/issue(.*)",
]);

export default clerkMiddleware((auth,req)=>{
  if(!auth().userId && isProtectedRoute(req)){
    return auth(req).redirectToSignIn();
  }
})

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};

// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// // Define protected routes with more specific typing
// const isProtectedRoute = createRouteMatcher([
//   "/onboarding(.*)",
//   "/organisation(.*)",
//   "/projects(.*)",
//   "/issue(.*)",
// ]);

// // Improved middleware with proper typing and error handling
// export default clerkMiddleware(async ({ auth, request }) => {
//   try {
//     // Get current auth state
//     const userId = auth().userId;

//     // Debug logging (remove in production)
//     console.log("Current userId:", userId);
//     console.log("Request path:", request.url);
//     console.log("Is protected route:", isProtectedRoute(request));

//     // Check if route is protected and user is not authenticated
//     if (!userId && isProtectedRoute(request)) {
//       console.log("Redirecting unauthenticated user to sign in");
//       return auth().redirectToSignIn({
//         // Optionally specify return URL
//         returnBackUrl: request.url,
//       });
//     }

//     // Allow request to proceed
//     return null;
//   } catch (error) {
//     console.error("Clerk middleware error:", error);
//     // Optionally redirect to error page or handle differently
//     throw error;
//   }
// });

// // Improved matcher configuration
// export const config = {
//   matcher: [
//     // Match all routes except static files and special Next.js routes
//     "/((?!_next/static|_next/image|favicon.ico).*)",

//     // Match API routes
//     "/api/(.*)",

//     // Match tRPC routes
//     "/trpc/(.*)",
//   ],
// };
