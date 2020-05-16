
window.onload = ()=> {

const portis = new Portis('6ae05414-fd51-41d5-bd20-db8d944e86a9', 'xdai')
const web3 = new Web3(portis.provider)

web3.eth.getAccounts((error, accounts) => {
    console.log(accounts);
  });
  
}
