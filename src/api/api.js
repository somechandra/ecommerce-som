/**@function ajax call and return json object */
export const apiCall = (link) =>
  fetch(link).then((response) => response.json());
