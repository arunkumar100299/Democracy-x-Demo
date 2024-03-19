import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Simulating a delay
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return <div>{loading && <CircularProgress />}</div>;
};

export default Loader;
