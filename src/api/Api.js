import React from 'react';

export const URL_API = 'https://dogsapi.origamid.dev/json';

export function USER_POST(body) {
  return {
    url: URL_API + '/api/user',
    options: {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function TOKEN_POST(body) {
  return {
    url: URL_API + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function TOKEN_VALIDATE_POST(token) {
  return {
    url: URL_API + '/jwt-auth/v1/token/validate',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function GET_USER(token) {
  return {
    url: URL_API + '/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function PHOTO_POST(formData, token) {
  return {
    url: URL_API + '/api/photo',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    },
  };
}
export function PHOTOS_GET({page, total, user}) {
  return {
    url: `${URL_API}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: 'GET',
      cache:'no-store'
     
    },
  };
}
