## Installation

### Requirements

- [Node.js](https://nodejs.org/en/download/)
- [Ganache GUI](https://trufflesuite.com/ganache/) (Graphical User Interface)
- [MetaMask](https://metamask.io/download) (Browser Extension)
- [MongoDB](https://www.mongodb.com/try/download/community) (Database)

### Configuring the project for development

1. **Clone this repository**:
   ```shell
   git clone https://github.com/AswinArsha/E-Voting.git
   cd E-Voting
   ```

2. **Install Truffle and Ganache CLI using Node Package Manager (npm)**:
   ```shell
   npm install -g truffle
   npm install -g ganache-cli
   ```

3. **Run Ganache GUI**:  
   - Launch Ganache GUI on your machine. 
   - If you haven't already, download and install Ganache GUI from [here](https://trufflesuite.com/ganache/).
   - Start Ganache GUI. 
   - If you're launching it for the first time, it may prompt you to create a new workspace. You can create a new workspace or choose an existing one.
   - Once Ganache GUI is running, it will start a local Ethereum blockchain with predefined accounts and private keys.

4. **Configure MetaMask**:
   - Open MetaMask in your browser.
   - Click on the network dropdown in the top left corner and select "Add Network".
   - A new MetaMask window will open. Select "Add a network manually".
   - Give the network a name.
   - Set the "New RPC URL" to `http://127.0.0.1:7545` (adjust the port if necessary).
   - Set the Chain ID to `1337`.
   - Set the currency symbol to `ETH`.
   - Click "Save".

5. **Import Accounts**:
   - In Ganache GUI, copy the private keys by clicking on the 'key' symbol. This will open a new "ACCOUNT INFORMATION" window.
   - In MetaMask, click on 'Add account'.
   - Select "Import account" and paste the private key.
   - Click "Import".

### Deploy Smart Contracts

#### Smart Contract (Smart_Contract directory)

1. **Install Truffle:**
   - Open a terminal.
   - Navigate to the `Smart_Contract` directory: `cd Smart_Contract`.
   - Run the following command to install Truffle globally: `npm install -g truffle`.

2. **Compile and Migrate Smart Contracts:**
   - Ensure you have a local blockchain network running (e.g., Ganache).
   - Navigate to the `Smart_Contract` directory if you're not already there.
   - Run `truffle compile` to compile your Solidity contracts.
   - Run `truffle migrate` to deploy your contracts to the local blockchain network.

### Launch the development server (frontend)

#### Voting Blockchain App (votingblockchain-app directory)

1. **Install Dependencies:**
   - Open a new terminal window.
   - Navigate to the `votingblockchain-app` directory: `cd votingblockchain-app`.
   - Run `npm install` to install the project dependencies.

2. **Start the App:**
   - After installing dependencies, run `npm start` to start the frontend application.
   - This will launch the app in your default web browser.

### Launch the development server (backend)

#### Blockchain Voting Backend (BlockChain_Voting_Backend directory)

1. **Install Dependencies:**
   - Open another new terminal window.
   - Navigate to the `BlockChain_Voting_Backend` directory: `cd BlockChain_Voting_Backend`.
   - Run `npm install` to install the project dependencies.

2. **Start the Backend Server:**
   - After installing dependencies, run `nodemon index.js` to start the backend server.
   - This will start the server and listen for requests on the specified port.

---

That's it! You have now installed and set up your project.
