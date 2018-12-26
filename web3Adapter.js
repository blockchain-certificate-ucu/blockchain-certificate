let Web3 = require('web3');
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

console.log(web3.eth.accounts);
web3.eth.defaultAccount = web3.eth.accounts[0];

let abi = [
    {
        "constant": true,
        "inputs": [],
        "name": "date",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "title",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "givenBy",
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
        "inputs": [],
        "name": "id",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "recepient",
        "outputs": [
            {
                "name": "id",
                "type": "address"
            },
            {
                "name": "fullname",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_title",
                "type": "string"
            },
            {
                "name": "_id",
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
                "name": "_date",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    }
];

let CoursesContract = web3.eth.contract(abi);
console.log(CoursesContract);
let Courses = CoursesContract.at('0x2f898b48bcfee0d38fc702ec7d1e0168a21729f5');
console.log(Courses);