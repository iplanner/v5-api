
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const { pathname } = getRequestURL(event);

  // Nur Webhook-Routen prüfen
  const allowedRoutes = ["/webhooks"]
  if (!allowedRoutes.some(route => pathname.startsWith(route))) {
    return
  }

  // X-API-KEY prüfen 
  const apiKey = getHeader(event, "x-api-key")
  if (apiKey !== config["X_API_KEY"]) {
    return sendError( event, createError({
      statusCode: 403,
      statusMessage: "Forbidden: Invalid API Key",
    }))
  }

/*   // --- Authorization: Bearer prüfen ---
  const authHeader = getHeader(event, "authorization") || ""
  if (!authHeader.startsWith("Bearer ")) {
    return sendError(event, createError({
      statusCode: 401,
      statusMessage: "Unauthorized: Missing Bearer token",
    }))
  } */


});