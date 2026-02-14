import { ethers } from 'ethers';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MONAD_TESTNET_RPC = 'https://testnet-rpc.monad.xyz';
const CHAIN_ID = 10143;

async function main() {
  // Check for private key
  const privateKey = process.env.PRIVATE_KEY;
  if (!privateKey) {
    console.error('Error: PRIVATE_KEY not found in environment variables');
    console.log('\nTo deploy, create a .env file with:');
    console.log('PRIVATE_KEY=your_private_key_here');
    console.log('\nOr run with:');
    console.log('PRIVATE_KEY=your_key node scripts/deploy.js');
    process.exit(1);
  }

  // Load compiled contract
  const artifactPath = path.resolve(__dirname, '../artifacts/SimpleStorage.json');
  if (!fs.existsSync(artifactPath)) {
    console.error('Error: Contract not compiled. Run "npm run compile" first.');
    process.exit(1);
  }

  const { abi, bytecode } = JSON.parse(fs.readFileSync(artifactPath, 'utf8'));

  // Connect to Monad Testnet
  console.log('Connecting to Monad Testnet...');
  const provider = new ethers.JsonRpcProvider(MONAD_TESTNET_RPC, CHAIN_ID);
  const wallet = new ethers.Wallet(privateKey, provider);

  console.log(`Deploying from address: ${wallet.address}`);

  // Check balance
  const balance = await provider.getBalance(wallet.address);
  console.log(`Balance: ${ethers.formatEther(balance)} MON`);

  if (balance === 0n) {
    console.error('Error: No MON balance. Get testnet tokens from the Monad faucet.');
    process.exit(1);
  }

  // Deploy contract
  console.log('\nDeploying SimpleStorage...');
  const factory = new ethers.ContractFactory(abi, bytecode, wallet);
  const contract = await factory.deploy();

  console.log('Waiting for deployment confirmation...');
  await contract.waitForDeployment();

  const address = await contract.getAddress();
  console.log(`\n✅ SimpleStorage deployed to: ${address}`);
  console.log(`Explorer: https://testnet.monadexplorer.com/address/${address}`);

  // Update config file
  const configPath = path.resolve(__dirname, '../src/contracts/config.js');
  let configContent = fs.readFileSync(configPath, 'utf8');
  configContent = configContent.replace(
    /export const CONTRACT_ADDRESS = '[^']*';/,
    `export const CONTRACT_ADDRESS = '${address}';`
  );
  fs.writeFileSync(configPath, configContent);
  console.log('\n✅ Updated CONTRACT_ADDRESS in src/contracts/config.js');

  // Update README
  const readmePath = path.resolve(__dirname, '../README.md');
  let readmeContent = fs.readFileSync(readmePath, 'utf8');
  readmeContent = readmeContent.replace(
    /\*\*Contract Address\*\*: `[^`]*`/,
    `**Contract Address**: \`${address}\``
  );
  readmeContent = readmeContent.replace(
    /\[View on Monad Explorer\]\([^)]*\)/,
    `[View on Monad Explorer](https://testnet.monadexplorer.com/address/${address})`
  );
  fs.writeFileSync(readmePath, readmeContent);
  console.log('✅ Updated README.md with contract address');

  return address;
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
