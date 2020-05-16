window.onload = () => {

    const portis = new Portis('6ae05414-fd51-41d5-bd20-db8d944e86a9', 'xdai')
    const web3js = new Web3(portis.provider)

    web3js.eth.getAccounts((error, accounts) => {
        console.log(accounts);
    });

    const Address = "0x589A65f3dA3Cf199cd4382F53DA0C819cB8c2859";

    //remixのボタンを押して取得したABIを貼り付け
    const ABI = [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "n",
                    "type": "uint256"
                }
            ],
            "name": "setnumber",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "get3",
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
            "name": "getnumber",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ]

    mycontract = new web3.eth.Contract(ABI, Address);

    console.log(web3.version)

    mycontract.methods.get3().call().then((fromblockchain1) => {
        console.log("get3 answer is " + fromblockchain1);
    });

    document.getElementById("bt").style="visibility: visible;"

}

sendTX = () => {
    let n = window.prompt("input number to write blockchain")

    if (n) {
        web3js.eth.getAccounts((error, accounts) => {
        mycontract.methods.setnumber(n).send({ from: accounts[0] });
        })
    }
}