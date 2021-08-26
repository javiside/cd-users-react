const fetchData = (url) => {
  return fetch(url)
    .then(async (res) => {
      if (res.ok) {
        // await (() => new Promise((r) => setTimeout(() => r(1), 3000)))();
        return res.json();
      } else {
        throw Error(
          `There was an error when trying to fetch the data (${res.status})`
        );
      }
    })
    .then((data) => {
      return { data, error: null };
    })
    .catch((error) => {
      return { data: [], error };
    });
};
export default fetchData;
