export const register = (newUser) => {
  return fetch("/register.json", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify(newUser)
  }).then(response => response.json())
  .then(json => {
    return json;
  })
  .catch(ex => console.log('parsing failed', ex));
}