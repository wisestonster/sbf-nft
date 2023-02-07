async function main() {
    const SbfToken = await ethers.getContractFactory("SbfToken")
  
    // Start deployment, returning a promise that resolves to a contract object
    const sbfToken = await SbfToken.deploy()
    await sbfToken.deployed()
    console.log("Contract deployed to address:", sbfToken.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  