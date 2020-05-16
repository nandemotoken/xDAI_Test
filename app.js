const portis;
const web3;

window.onload = ()=> {

portis = new Portis('6ae05414-fd51-41d5-bd20-db8d944e86a9', 'xdai')
web3 = new Web3(portis.provider)

}