import { useState, useEffect } from 'react';
import API from '../service/API';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    API.get(url)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(setLoading(false));
  }, [url]);

  return [data, loading, error];
};

export default useFetch;
