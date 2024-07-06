// jadi kita akan melakukan transaksi melalui akses wallet // 
/* OVERVIEW 
- buat instance wallet dengan impor pk dan provider 
- sendtrasaction melalui wallet itu 
- cetak tx nya 
*/

const { ethers, providers } = require("ethers") ; 

const provider = new providers.JsonRpcProvider("https://mainnet.infura.io/v3/0e1b983ce06840069ddd6f8202ee20f7")



const account1 = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" // sender ; 
const account2 = "0xFe60fE12a43c6CE6dA3933c600E6a2EE1Fd322b8" // reciepient ' 

const privateKey = "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80" // private ket sender 

const wallet = new  ethers.Wallet(privateKey, provider) ; 
const main = async () => { 
    
    const tx = await wallet.sendTransaction( {to:account2 , value: ethers.utils.parseEther("0.000000000001") }) 
    

    await tx.wait() ; 
    console.log(tx) ; 
    
}

main() ; 