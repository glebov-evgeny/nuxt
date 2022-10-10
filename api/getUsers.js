export default async function getUsers() {
  // eslint-disable-next-line no-undef
  const response = await $nuxt.get('https://jsonplaceholder.typicode.com/users');
  console.log(response);
  console.log(response.data);
  return response.data;
}
