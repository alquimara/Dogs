import React, { useState } from 'react';

const UserFetch = () => {
  const [data, setData] = useState(null);
  const [erro, setErro] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setErro(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) throw new Error(json.message);
    } catch (erro) {
      json = null;
      setErro(erro.message);
    } finally {
      setData(json);
      setLoading(false);
      console.log(json);
      return { response, json };
    }
  }, []);
  return data, erro, loading, request;
};
export default UserFetch;
