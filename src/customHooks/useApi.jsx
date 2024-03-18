import useSWR from 'swr';

const fetcher = async (url, method, data) => {
  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const useGetApi = (url) => {
  return useSWR(url, fetcher);
};

export const usePostApi = (url) => {
  const post = async (data) => {
    return fetcher(url, 'POST', data);
  };

  return { post };
};
