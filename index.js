require('dotenv').config()

const { Keypair } = require('@solana/web3.js')
const { getKeypairFromEnvironment } = require('@solana-developers/node-helpers')
/**
 * Generates a keypair for cryptographic operations.
 * @returns {Object} The generated keypair.
 * @property {string} publicKey - The public key in Base58 format.
 * @property {string} secretKey - The secret key as a string.
 */
function generateKeypair() {
    const keypair = Keypair.generate()
    const publicKey = keypair.publicKey.toBase58()
    const secretKey = keypair.secretKey.toString()

    // console.log(`
    //     publicKey: ${publicKey}
    //     secretKey: ${secretKey}
    // `)

    return {
        publicKey,
        secretKey,
    }
}

/**
 * Loads a keypair from the environment variable SECRET_KEY.
 * @returns {Object} An object containing the public key and secret key.
 */
function loadKeypairFromEnvironment() {
    const keyPair = getKeypairFromEnvironment("SECRET_KEY");
    const publicKey = keyPair.publicKey.toBase58()
    const secretKey = keyPair.secretKey.toString()

    // console.log(`
    //     publicKey: ${publicKey}
    //     secretKey: ${secretKey}
    // `)

    return {
        publicKey,
        secretKey,
    }
}

module.exports = {
    generateKeypair,
    loadKeypairFromEnvironment
}