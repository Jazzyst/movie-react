export const baseUrl = 'http://localhost:4000';

export const get = async (url = '') => {
  const response = await fetch(`${baseUrl}${url}`, {
    method: 'GET',
  });
  return await response.json();
}




