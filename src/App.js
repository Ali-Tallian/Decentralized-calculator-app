import React, { useState } from 'react';
import { ethers } from 'ethers';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

// ✅ Replace with your deployed contract address from Remix
const contractAddress = "0x716D4930fD1f4460BC79A20eAd1E8813aF2e098e";

// ✅ Your smart contract ABI
const abi = 
  [
    {
      "inputs": [
        {
          "internalType": "int256",
          "name": "a",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "b",
          "type": "int256"
        }
      ],
      "name": "add",
      "outputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "int256",
          "name": "a",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "b",
          "type": "int256"
        }
      ],
      "name": "divide",
      "outputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "int256",
          "name": "a",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "b",
          "type": "int256"
        }
      ],
      "name": "multiply",
      "outputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "result",
      "outputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "int256",
          "name": "a",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "b",
          "type": "int256"
        }
      ],
      "name": "subtract",
      "outputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
  function App() {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [result, setResult] = useState(null);
  
    const connectContract = async () => {
      if (!window.ethereum) return alert("MetaMask is not installed!");
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      return new ethers.Contract(contractAddress, abi, signer);
    };
  
    const callFunction = async (methodName) => {
      try {
        const contract = await connectContract();
        const tx = await contract[methodName](parseInt(a), parseInt(b));
        await tx.wait(); // wait for transaction to confirm
        const res = await contract.result();
        setResult(res.toString());
      } catch (err) {
        console.error(err);
        alert("Something went wrong. Check the console for details.");
      }
    };
  
    return (
      <div className="App bg-dark text-primary min-vh-100 py-5">
        <div className="container">
          <h1 className="text-center mb-5">🧮 Blockchain Calculator</h1>
  
          <div className="form-group">
            <label className="h5">Number 1:</label>
            <input
              type="number"
              className="form-control bg-secondary text-white border-0"
              value={a}
              onChange={(e) => setA(e.target.value)}
              placeholder="Enter first number"
            />
          </div>
  
          <div className="form-group mt-3">
            <label className="h5">Number 2:</label>
            <input
              type="number"
              className="form-control bg-secondary text-white border-0"
              value={b}
              onChange={(e) => setB(e.target.value)}
              placeholder="Enter second number"
            />
          </div>
  
          <div className="d-flex justify-content-center my-4 flex-wrap">
            <button className="btn btn-primary m-2" onClick={() => callFunction("add")}>Add ➕</button>
            <button className="btn btn-outline-light m-2" onClick={() => callFunction("subtract")}>Subtract ➖</button>
            <button className="btn btn-info m-2" onClick={() => callFunction("multiply")}>Multiply ✖️</button>
            <button className="btn btn-outline-primary m-2" onClick={() => callFunction("divide")}>Divide ➗</button>
          </div>
  
          {result !== null && (
            <div className="alert alert-primary text-center mt-4">
              <h2>✅ Result: {result}</h2>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default App;