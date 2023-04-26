async function cryptoCRUD({userName, cryptoReq, cryptoID = null, cryptoData = null}) {
    console.log(userName, cryptoReq, cryptoID, cryptoData)
  try {
    return await fetch('https://us-central1-tidal-datum-384923.cloudfunctions.net/CRUD-Crypto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({
            userName: userName,
            cryptoData: cryptoData,
            cryptoID: cryptoID,
            cryptoReq: cryptoReq
        })
    })
        .then(data => data.json())
        .then(data => {
            console.log(data);
            return data;
        })
    // const data = await response.json();
    // return data;
  } catch (error) {
    console.error(error);
  }
}

export default cryptoCRUD;