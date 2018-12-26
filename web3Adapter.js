let Web3 = require('web3');
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

console.log(web3.eth.accounts);
web3.eth.defaultAccount = web3.eth.accounts[1];

let abi = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "title",
                "type": "string"
            },
            {
                "name": "id",
                "type": "uint256"
            },
            {
                "name": "userId",
                "type": "address"
            },
            {
                "name": "username",
                "type": "string"
            },
            {
                "name": "date",
                "type": "string"
            }
        ],
        "name": "createCertificate",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "certificateAddress",
                "type": "address"
            }
        ],
        "name": "CertificateCreated",
        "type": "event"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "CertificateArray",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "CertificateList",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];

let CertificateFactory = web3.eth.contract(abi);
console.log(CertificateFactory);
let Certificate = CertificateFactory.at('0x25bc9410e0b395c8c9f7eb325dfa048aa6bd2a28');
console.log(Certificate);
console.log(Certificate.methods);