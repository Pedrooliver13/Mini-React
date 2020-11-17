import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const req = React.useCallback(async (url, options) => {
    let results, resultsJson;

    try {
      setLoading(true);
      results = await fetch(url, options);
      resultsJson = await results.json();

      if(results.ok === false) throw new Error('Erro');
    } catch (err) {
      setError(err);
      resultsJson = null;
    } finally {
      setData(resultsJson);
      setLoading(false);
      return { results, resultsJson };
    }
  }, []);

  return {
    data,
    error,
    loading,
    req,
  };
};

export default useFetch;
