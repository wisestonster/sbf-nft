async function main() {
    const SbfNFT = await ethers.getContractFactory("SbfNFT")
  
    // Start deployment, returning a promise that resolves to a contract object
    const sbfNFT = await SbfNFT.deploy()
    await sbfNFT.deployed()
    console.log("Contract deployed to address:", sbfNFT.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  