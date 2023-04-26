import React, { Fragment, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import cryptos from './cryptos';
import { Link, useNavigate } from 'react-router-dom'
import getPrice from './api/binCryptos';
import { GoogleLogout } from 'react-google-login';
import cryptoCRUD from './api/CRUD';


function Home () {
    let history = useNavigate();
    
    const [cryptos, setCryptos] = useState([]);
    
    if (!localStorage.getItem('username')) {
        history('/');
    }
    
    const fetchCryptos = async () => {
        const cryptos = await cryptoCRUD({userName: localStorage.getItem('username'), cryptoReq: "GET"});
        setCryptos(cryptos?.cryptos);
    };

    useEffect(() => {
        fetchCryptos();
    }, []);

    //Sell is Delete in CRUD
    const handleSell = async (symbol) => {
        await cryptoCRUD({userName: localStorage.getItem('username'), cryptoID: symbol, cryptoReq: "DELETE"});
        fetchCryptos();
        history('/home')
    }

    //Buy is Update in CRUD
    const handleBuy = (name, symbol) => {
        cryptoCRUD({userName: localStorage.getItem('username'), cryptoID: symbol, cryptoReq: "UPDATE", cryptoData: {name: name, symbol: symbol}});
        history('/home')
    };

    return (
        <Fragment>
            <div style={{margin: "10rem"}}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Symbol</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cryptos && cryptos.length > 0 ? cryptos.map((crypto, index) => {
                            return (
                            <tr key={index}>
                                <td>{crypto.name}</td>
                                <td>{crypto.symbol}</td>
                                <td><MyComponent symbol={crypto.symbol} ></MyComponent></td>
                                <td>
                                <Link to={`/edit?crypto=${crypto.symbol}`}>
                                    <Button variant="primary" onClick={() => handleBuy(crypto.name, crypto.symbol)}>Buy</Button>
                                </Link>
                                &nbsp;
                                <Button variant="primary" onClick={() => handleSell(crypto.symbol)}>Sell</Button>
                                </td>
                            </tr>
                            );
                        }) : "No hay datos"}
                        </tbody>
                </Table>
                <br/>
                <br/>
                <Link className='d-grid gap-2'  to={"/create"}>
                    <Button size="lg">Add wallet</Button>
                </Link>
                <GoogleLogout 
                    clientId="834090234899-ej2d2256bvvuej6gt7vjkn749b4rqlpa.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={() => history('/')}
                />
            </div>
        </Fragment>
    )

}

function MyComponent(symbol) {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      async function getData() {
        const result = await getPrice(symbol.symbol + 'BUSD')
        setData(addCommas(result));
      }
      getData();
    }, []);
  
    return (
      <div>
        {data ? <div>${data}</div> : <div>Loading...</div>}
      </div>
    );
  }
  
function addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
  

export default Home;