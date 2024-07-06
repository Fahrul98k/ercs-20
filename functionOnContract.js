const {ethers, providers} = require("ethers")

const provider = new providers.JsonRpcProvider("https://mainnet.infura.io/v3/0e1b983ce06840069ddd6f8202ee20f7")
const add = "0x4e15361fd6b4bb609fa63c81a2be19d873717870" 
const abi = [ 
    "function name() view returns (string)",
    "function symbol() view returns(string)"
]
// const main = async () => { 
//     const contract = await new ethers.Contract(add, abi , provider) ; 
//     const name = await contract.name() ; 
//     const symbol = await contract.symbol() 
//     console.log(name) ; 
//     console.log(symbol) ; 

// }

async function main() { 
    const contract = await new ethers.Contract(add , abi , provider) 
    const name = await contract.name() ; 
    console.log(name) ; 

}

main() ; 