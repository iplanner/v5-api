export default defineEventHandler(async (event) => {
  
  const config = useRuntimeConfig(event);

  const guid = getRouterParam(event, 'guid');
  const body = await readBody(event);
  const header = getHeader(event, "x-api-key")

  console.log('guid',guid);
  console.log('body',body);
  console.log('header',header);

  return guid;

});
