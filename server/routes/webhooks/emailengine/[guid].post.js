export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);

  const guid = getRouterParam(event, 'guid');
  let body = await readBody(event);

  console.log('guid',guid);
  console.log('body',body);

  return guid;

});
