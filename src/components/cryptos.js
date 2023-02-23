//Clear Local Storage
localStorage.clear();

//Default Cryptos
const cryptos = [
    {
        id: 1,
        name: 'Bitcoin',
        symbol: 'BTC',
    },
    {
        id: 2,
        name: 'Ethereum',
        symbol: 'ETH',
    },
    {
        id: 3,
        name: 'Ripple',
        symbol: 'XRP',
    }
]

export default cryptos;

// cryptos.forEach((crypto) => {
//     console.log(crypto);
//     localStorage.setItem(crypto.name, JSON.stringify(crypto));
// });