export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const { pathname } = getRequestURL(event)

  // Nur Webhook-Routen prüfen
  if (!pathname.startsWith('/webhooks')) return

  // IP prüfen
  const allowIps = (config.EE_WEBHOCK_ALLOWED_IPS || '')
    .split(',')
    .map(s => s.trim())
    .filter(Boolean)

  const xff = getHeader(event, 'x-forwarded-for') || ''
  const clientIp = (xff.split(',')[0] || event.node.req.socket.remoteAddress || '').trim()

  if (
    allowIps.length &&
    clientIp &&
    !allowIps.some(ip => ip === clientIp)
  ) {
    return sendError(
      event,
      createError({ statusCode: 403, statusMessage: 'Forbidden: IP not allowed' })
    )
  }

  // X-API-KEY prüfen
  const apiKey = getHeader(event, 'x-api-key')
  if (apiKey !== config.X_API_KEY) {
    return sendError(
      event,
      createError({ statusCode: 403, statusMessage: 'Forbidden: Invalid API Key' })
    )
  }
})