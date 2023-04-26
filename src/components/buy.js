import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate  } from "react-router-dom";
import cryptos from "./cryptos";
import cryptoCRUD from './api/CRUD';

function Buy() {
    const [name, setName] = useState("");
    const [symbol, setSymbol] = useState("");
    const [crypto, setCrypto] = useState("");

    let history = useNavigate();

    //get crypto name from params in url
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const crypto = urlParams.get('crypto');
        setCrypto(crypto);
    }, [])

    const handleBuy = (e) => {
        e.preventDefault();
        cryptoCRUD({userName: localStorage.getItem('username'), cryptoID: crypto, cryptoReq: "UPDATE", cryptoData: {name: name, symbol: symbol}});
        history('/home')
    }

    return (
        <div>
            <Form className="d-gap gap-2" style={{margin: "15rem"}}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Enter Cripto Name" value={name} required onChange={
                        (e) => {
                            setName(e.target.value);
                        }
                    }>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSymbol">
                    <Form.Control type="text" placeholder="Enter Cripto symbol" value={symbol} required onChange={
                        (e) => {
                            setSymbol(e.target.value);
                        }
                    }>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(e) => handleBuy(e) }>
                    Update
                </Button>
            </Form>
        </div>
    )

}

export default Buy;