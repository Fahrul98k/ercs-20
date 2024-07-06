// events ini adalah log ,yang terpampang di interface dalam suatu scan interface pada suatu chain , kita akan melacak event token yang ada dalam suatu blokchain 

/**
 * 1. menentukan token yang igin di lacak 
 * 2. menentukan block yang mau di lacak block ke berapa 
 * 3. melacak event nya 
 * 4. cetak event nya 
 */
const { ethers } = require("ethers");


const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/0e1b983ce06840069ddd6f8202ee20f7`)

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",

    "event Transfer(address indexed from, address indexed to, uint amount)"
];

const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F' // DAI Contract
// membuat inscatance token yang mau di lacak 
const contract = new ethers.Contract(address, ERC20_ABI, provider )


const main = async () => {
    // mendapatkan block number 
    const blockNumber = await provider.getBlockNumber() 
    // mencari event yang di iginkan 
    const tranferEvent = await contract.queryFilter("Transfer", blockNumber - 10 , blockNumber ); 
    // mencetak event itu 
    console.log(tranferEvent) ; 
    
}

main()