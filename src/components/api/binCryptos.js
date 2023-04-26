async function getPrice(symbol) {
    try {
      const response = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`);
      const json = await response.json();
      const price = parseFloat(json.price).toFixed(2);
      return price;
    } catch (error) {
      console.error(error);
    }
  }
  
  export default getPrice;
  