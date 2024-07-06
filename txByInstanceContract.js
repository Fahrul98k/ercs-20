// melakukan tx berdasarkan instance contract yang di buat 

/* 
1. tentukan contract yang mau di buat instance nya 
2. kita konek kan contract itu ke wallet yang akan signer tx 
3. berinteraksi dengan kontrak itu 
 */

const { ethers, providers } = require("ethers") ; 

// addressContract 
const addressContract = "0x2a2ccd157c4ed8485cf9385fd9460117ce717bbb" ;
const sender = "0xFe60fE12a43c6CE6dA3933c600E6a2EE1Fd322b8"
const recipient ="0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"

// privateKey_wallet 
const privateKey = "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80" ; 

// wallet 

const wallet = new ethers.Wallet(privateKey); 

const ABI = [ 
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount) returns (bool)",
] ; 
const provider = new providers.JsonRpcProvider("https://sepolia.infura.io/v3/0e1b983ce06840069ddd6f8202ee20f7")


// main function 
const contract =  new ethers.Contract(addressContract, ABI , provider) ; 
const main = async () => { 

    const balance = await contract.balanceOf(sender) ; 
    

    const contractWallet = contract.connect(wallet) ; 
    const tx = await  contractWallet.transfer(recipient , balance)
    console.log(tx) 
    



    

}

main() ; 