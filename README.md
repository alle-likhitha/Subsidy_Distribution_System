
# Subsidy Distribution System

This project is designed to create a **blockchain-based subsidy distribution system** that ensures transparency, efficiency, and security in the management and distribution of government subsidies. The system leverages **Solidity**, **Truffle**, **Hardhat**, **Ganache**, **Node.js**, and **React.js** to provide a decentralized solution where farmers can register, apply for subsidies, and government authorities can verify eligibility and approve or reject applications. All transactions are handled securely via **MetaMask**.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Architecture](#project-architecture)
- [Smart Contracts](#smart-contracts)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Farmer Registration:** Farmers can create accounts on the platform.
- **Subsidy Application:** Farmers can apply for available subsidies.
- **Government Verification:** Government officials verify the farmers' eligibility based on predefined criteria.
- **Secure Transactions:** All transactions are handled securely via MetaMask and stored on the blockchain.
- **Blockchain Transparency:** The system provides a transparent ledger for tracking all subsidy applications and disbursements.

## Technologies Used

- **Blockchain:** 
  - [Solidity](https://docs.soliditylang.org) for smart contract development.
  - [Truffle](https://trufflesuite.com/) & [Hardhat](https://hardhat.org/) for testing and deployment of smart contracts.
  - [Ganache](https://trufflesuite.com/ganache/) for a local Ethereum blockchain simulation.

- **Frontend:** 
  - [React.js](https://reactjs.org/) for building the user interface.

- **Backend:** 
  - [Node.js](https://nodejs.org/en/) for handling backend logic.

- **Wallet Integration:** 
  - [MetaMask](https://metamask.io/) for managing Ethereum transactions.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/alle-likhitha/Subsidy_Distribution_System.git
   cd Subsidy_Distribution_System
   ```

2. Install dependencies for both the frontend and backend:
   ```bash
   npm install
   ```

3. Install Truffle and Ganache CLI globally:
   ```bash
   npm install -g truffle ganache-cli
   ```

4. Start the Ganache blockchain:
   ```bash
   ganache-cli
   ```

5. Compile and deploy smart contracts:
   ```bash
   truffle compile
   truffle migrate --network development
   ```

6. Start the development server for the frontend:
   ```bash
   cd client
   npm start
   ```

## Usage

1. **Register Farmers:** Farmers can sign up for an account and access the platform.
2. **Apply for Subsidies:** Registered farmers can apply for government subsidies by filling in their details.
3. **Government Review:** Government officials verify the application and either approve or reject it based on eligibility.
4. **MetaMask Integration:** Users interact with the system through MetaMask for secure Ethereum transactions.

## Project Architecture

1. **Frontend:** Built with React.js, it provides an intuitive UI for both farmers and government officials.
2. **Smart Contracts:** Written in Solidity, the contracts handle the registration, application, and approval process on the blockchain.
3. **Backend:** Node.js manages the server-side logic and communication between the frontend and blockchain.

## Smart Contracts

The following smart contracts are part of the system:

- **Farmer.sol:** Manages farmer registration and details.
- **Subsidy.sol:** Handles the creation and application process for subsidies.
- **Verification.sol:** Provides government authorities the ability to verify and approve subsidy applications.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Make your changes and commit:
   ```bash
   git commit -m "Add your message"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-branch
   ```
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.


