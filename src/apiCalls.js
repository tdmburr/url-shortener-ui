const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
    .then(res => {
      if (!res.ok) {
        throw Error("Failed to get urls");
      }
      return res.json();
    })
};

export { getUrls }