import React, { Fragment } from 'react';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import cryptos from './cryptos';
import { Link, useNavigate } from 'react-router-dom'

function Home () {

    let history = useNavigate();

    const isAuthenticated = localStorage.getItem('isAuthenticated');
  
    if (isAuthenticated !== 'true' || isAuthenticated === null) {
        history('/login');
      return null;
    }


    const handleSell = (id) => {
        var index = cryptos.map(function(e) { return e.id; }).indexOf(id);
        cryptos.splice(index, 1);
        history('/')
    }

    const handleBuy = (name, symbol, id) => {
        localStorage.setItem("name", name);
        localStorage.setItem("symbol", symbol);
        localStorage.setItem("id", id);
    };

    return (
        <Fragment>
            <div style={{margin: "10rem"}}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Symbol</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cryptos && cryptos.length > 0 ? cryptos.map((crypto, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{crypto.name}</td>
                                        <td>{crypto.symbol}</td>
                                        <td>
                                            <Link to={"/edit"}>
                                                <Button variant="primary" onClick={ () => handleBuy(crypto.name, crypto.symbol, crypto.id) }>Buy</Button>
                                            </Link>
                                            &nbsp;
                                            <Button variant="primary" onClick={
                                                () => {
                                                    handleSell(crypto.id);
                                                }
                                            }>Sell</Button>
                                        </td>
                                    </tr>
                                )
                            }): "No hay datos"
                        }
                    </tbody>
                </Table>
                <br/>
                <br/>
                <Link className='d-grid gap-2'  to={"/create"}>
                    <Button size="lg">Add wallet</Button>
                </Link>

            </div>
        </Fragment>
    )

}

export default Home;