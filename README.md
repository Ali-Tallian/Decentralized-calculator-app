# 🧮 Blockchain Calculator DApp

A simple decentralized application (DApp) that performs basic arithmetic operations — Addition, Subtraction, Multiplication, and Division — using a smart contract deployed on the Ethereum blockchain. Users can interact with the contract through a web-based frontend integrated with MetaMask.

---

## 🚀 Features

- Perform arithmetic operations on-chain
- Smart contract written in Solidity
- Frontend built with HTML, Bootstrap (black and blue theme), and JavaScript
- Interacts with MetaMask for wallet connection and transactions
- Runs locally using Ganache for testing

---

## 📂 Project Structure

├── contracts/
│ └── Calculator.sol # Solidity Smart Contract
├── index.html # Frontend UI with Bootstrap styling
├── app.js # JavaScript file for Web3 interactions
├── README.md # Project Documentation


---

## 🛠️ Technologies Used

- **Solidity** — Smart contract language
- **Ganache** — Local Ethereum blockchain for testing
- **MetaMask** — Ethereum wallet for browser
- **Web3.js** — JavaScript library to interact with Ethereum
- **Bootstrap 5** — UI styling (black & blue theme)

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/blockchain-calculator-dapp.git
cd blockchain-calculator-dapp

### 2. Install Ganache
 
Download Ganache

Start a workspace and copy the RPC URL (e.g., http://127.0.0.1:7545)

### 3. Compile & Deploy Smart Contract
Use Remix IDE
 

Paste the contents of Calculator.sol into a new file

Compile and deploy it using the "Injected Provider" (MetaMask connected to Ganache)

Copy the deployed contract address and ABI

### 4. Configure Frontend
In app.js, update the contract address and ABI:
const contractAddress = "PASTE_DEPLOYED_ADDRESS_HERE";
const contractABI = [PASTE_ABI_HERE];

### 5. Serve the Frontend
```bash
npm start