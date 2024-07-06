const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/0e1b983ce06840069ddd6f8202ee20f7") ; 

const main = async () => { 
    const block = await provider.getBlockNumber() ; 
    const { transactions} = await  provider.getBlockWithTransactions(block) ; 
    console.log(transactions[0]) ; 
}

main() ; 