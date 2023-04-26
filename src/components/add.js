import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import cryptos from "./cryptos";
import cryptoCRUD from './api/CRUD';

function Add() {
    const [name, setName] = useState("");
    const [symbol, setSymbol] = useState("");
    let history = useNavigate();

    const handleNew = async (e) => {
        e.preventDefault();
        await cryptoCRUD({userName: localStorage.getItem('username'), cryptoID: symbol, cryptoReq: "CREATE", cryptoData: {name: name, symbol: symbol}});
        history("/home");
    }

    return(
        <div>
            <Form className="d-gap gap-2" style={{margin: "15rem"}}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Enter Cripto Name" required onChange={
                        (e) => {
                            setName(e.target.value);
                        }
                    }>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSymbol">
                    <Form.Control type="text" placeholder="Enter Cripto symbol" required onChange={
                        (e) => {
                            setSymbol(e.target.value);
                        }
                    }>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={ (e) => handleNew(e) }>
                    Add
                </Button>
            </Form>
        </div>
    )
}

export default Add;