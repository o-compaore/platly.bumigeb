import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    console.log(tokenString,tokenString !== 'undefined',  tokenString === null)
    return tokenString !== null && tokenString !== 'undefined'
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('token', userToken.access_token);
    localStorage.setItem('user_role', userToken.user_role);
    localStorage.setItem('token_expire_in', userToken.expire_in);
    localStorage.setItem('user_name', userToken.user_name);
    localStorage.setItem('user_mail', userToken.user_mail);

    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token
  }
}
