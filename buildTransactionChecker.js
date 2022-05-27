const Web3 = require("web3");

async function main() {
    // Configuring the connection to an Ethereum node
    const network = process.env.ETHEREUM_NETWORK;
    const web3 = new Web3(
      new Web3.providers.HttpProvider(
        `https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
      )
    );
        
    var account = '0x26704Dc20d0ddF6cAa45b4D2b8AcB643015B951E'

    let block = await web3.eth.getBlock('latest');

    console.log(block)

    console.log("Searching Block ..");
        if(block && block.transactions) {
            for(let txHash of block.transactions) {
                console.log(txHash)
                let tx = await web3.eth.getTransaction(txHash);
                if(account === tx.to.toLowerCase()) {
                    console.log(`Transaction Foun of Block ${lastBLockNumber}`)
                    console.log({
                        address: tx.from,
                        value: web3.utils.fromWei(tx.value, 'ether'),
                        timestamp: new Date()
                    });
                }
            }
        
  }
}
  
  require("dotenv").config();


  setInterval(() => {
      main()
  }, 7000)

