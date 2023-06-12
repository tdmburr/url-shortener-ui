const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
    .then(res => {
      if (!res.ok) {
        throw Error("Failed to get urls");
      }
      return res.json();
    })
};

const postUrls = (url) => {
  return fetch('http://localhost:3001/api/v1/urls', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(url)
    })
}

export { getUrls, postUrls };