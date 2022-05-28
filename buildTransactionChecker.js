const Web3 = require("web3");

async function main() {
    // Configuring the connection to an Ethereum node
    const web3 = new Web3(
      new Web3.providers.HttpProvider(
        `https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
      )
    );
        
    var account = YOUR_ADDRESS
    let block = await web3.eth.getBlock('latest');

    console.log("Searching Block ..");
        if(block && block.transactions) {
            for(let txHash of block.transactions) {
                let tx = await web3.eth.getTransaction(txHash);
            
                if(account === tx.from) {
                    console.log("트랜잭션 정보 획득!!")
                    console.log({
                        address: tx.from,
                        value: web3.utils.fromWei(tx.value, 'ether'),
                        timestamp: new Date()
                    });
                }
                if(account === tx.to) {
                  console.log("트랜잭션 정보 획득!!")
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
  }, 3000)

