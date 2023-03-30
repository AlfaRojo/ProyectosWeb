import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate  } from "react-router-dom";
import cryptos from "./cryptos";
import { v4 as uuidv4 } from "uuid";

function Buy() {
    const [name, setName] = useState("");
    const [symbol, setSymbol] = useState("");
    const [id, setID] = useState("");
    let history = useNavigate();
    // const isAuthenticated = localStorage.getItem('isAuthenticated');

    // if (isAuthenticated !== 'true') {
    //     history('/login');
    //   return null;
    // }

    const handleBuy = (e) => {
        e.preventDefault();
        const index = cryptos.findIndex((crypto) => crypto.id === id);
        if (index < cryptos.length) {
            cryptos[index].name = name;
            cryptos[index].symbol = symbol;
            history("/home");
        } else {
            console.error(`Invalid index: ${index}`);
        }
    }
    

    useEffect(() => {
        setName(localStorage.getItem("name"))
        setSymbol(localStorage.getItem("symbol"))
        setID(parseInt(localStorage.getItem("id")))
    }, [])

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