const baseUrl = import.meta.env.VITE_BASE_URL;

// se utiliza para el login y el registro, aquí se crea un token y se guarda en el localsotrage

export const fetchSinToken = async (endpoint, data, method = 'GET') => {
  if (method === 'GET') {
    const response = await fetch(`${baseUrl}/${endpoint}`);
    return await response.json();
  } else {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  }
};

export const fetchWithToken = async (endpoint, data, method = 'GET') => {
  const token = localStorage.getItem('token');
  if (method === 'GET') {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      headers: {
        'x-token': token,
      },
    });
    return await response.json();
  } else {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'x-token': token,
      },
    });
    return await response.json();
  }
};
