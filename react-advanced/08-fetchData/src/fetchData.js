export const fetchData = async (page, resultsPerPage) => {
  const response = await fetch(
    `https://randomuser.me/api/?page=${page}&results=${resultsPerPage}&seed=abc`
  );
  const data = await response.json();
  return data;
};


