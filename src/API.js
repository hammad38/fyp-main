// src/components/ButtonPanel.js
import React, { useEffect, useState } from 'react';
import { fetchData } from '../utils/api';

const ButtonPanel = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchButtonData = async () => {
      try {
        const url = 'https://glorious-spork-p694r7475v4c9prq-3000.app.github.dev/widget/createWidget'; 
        const result = await fetchData(url);
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchButtonData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Button Panel</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ButtonPanel;
