// membaca informasi dalam suatu address 

/*

1. buat variabel yg mau di baca 
2. buat provider 
3. baca dari provider 
4. konversi hasil baca menjadi sesuatu yang bisa di baca 

*/

const {ethers, providers, Contract} = require("ethers")

const provider = providers.JsonRpcProvider("https://sepolia.infura.io/v3/0e1b983ce06840069ddd6f8202ee20f7") ; 

// adress yang ingiin di baca 
const address = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" ; 

const main = async () => { 
    // mendaptkan balance 
    const balance = await provider.getBalance(address) ; 
    // yang di kembalikan bukan angka yang bisa di baca jadi harus di konversi 
    const balanceNew = ethers.utils.formatEther(balance) ; 
    // tulis 
    console.log(balanceNew) ; 
}

main() ; 