import solc from 'solc';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contractPath = path.resolve(__dirname, '../src/contracts/SimpleStorage.sol');
const source = fs.readFileSync(contractPath, 'utf8');

const input = {
  language: 'Solidity',
  sources: {
    'SimpleStorage.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};

console.log('Compiling SimpleStorage.sol...');
const output = JSON.parse(solc.compile(JSON.stringify(input)));

if (output.errors) {
  output.errors.forEach((err) => {
    console.log(err.formattedMessage);
  });
}

const contract = output.contracts['SimpleStorage.sol']['SimpleStorage'];
const abi = contract.abi;
const bytecode = contract.evm.bytecode.object;

// Save ABI
const abiPath = path.resolve(__dirname, '../src/contracts/abi.json');
fs.writeFileSync(abiPath, JSON.stringify(abi, null, 2));
console.log('ABI saved to src/contracts/abi.json');

// Save bytecode for deployment
const artifactsDir = path.resolve(__dirname, '../artifacts');
if (!fs.existsSync(artifactsDir)) {
  fs.mkdirSync(artifactsDir, { recursive: true });
}

fs.writeFileSync(
  path.resolve(artifactsDir, 'SimpleStorage.json'),
  JSON.stringify({ abi, bytecode }, null, 2)
);
console.log('Artifacts saved to artifacts/SimpleStorage.json');
console.log('Compilation complete!');
