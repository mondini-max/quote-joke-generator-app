import React, { useState, useEffect } from 'react';

const useAxios = (configObj) => {
  const { axiosInstance, method, url, requestConfig = {} } = configObj;
  const [response, setResponse] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [reloading, setReloading] = useState(0);
  const reFetchData = () => setReloading((prev) => prev + 1);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const res = await axiosInstance[method.toLowerCase()](url, {
          ...requestConfig,
          signal: controller.signal,
        });
        // console.log(res);
        setResponse(res.data);
      } catch (error) {
        // console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // useEffect cleanup function
    return () => controller.abort();
  }, [reloading]);

  return [response, error, loading, reFetchData];
};

export default useAxios;
