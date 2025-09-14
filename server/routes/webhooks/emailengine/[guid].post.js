export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);

  const guid = getRouterParam(event, 'guid');

  console.log('guid',guid);

  return guid;

});
