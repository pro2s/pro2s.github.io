const url = import.meta.env.VITE_API_PATH || "/api/"

export const sendForm = (data) =>
  fetch(url + 'send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

