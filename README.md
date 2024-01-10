# @sk1ppi/solana-module-1-cryptography-and-the-solana-network

![Made by](https://img.shields.io/badge/SK1PPI-8A2BE2)
![GitHub License](https://img.shields.io/github/license/sk1ppi/solana_module_1_cryptography_and_the_solana_network)
![NPM Version](https://img.shields.io/npm/v/@sk1ppi/solana-module-1-cryptography-and-the-solana-network)

This package is a part of the [Solana Development Course](https://www.soldev.app/course) by [James Pacheco](https://twitter.com/jamesrp13) and [others](https://github.com/Unboxed-Software/solana-course/graphs/contributors?type=a). 
It contains the code for the first module of the bootcamp, which is about cryptography and the Solana network.

## Install

To install the package, use the following command:


```shell
npm i @sk1ppi/solana-module-1-cryptography-and-the-solana-network
```

## Example

To use the package, use the following code example:

```js
const {     
    generateKeypair,
    loadKeypairFromEnvironment
 } = require('@sk1ppi/solana-module-1-cryptography-and-the-solana-network');
 
const keypair = generateKeypair();
console.log(keypair);
/** 
 * {
 *  publicKey: ...
 *  secretKey: ...
 * }
**/


const keypair = loadKeypairFromEnvironment();
console.log(keypair);
/** 
 * {
 *  publicKey: ...
 *  secretKey: ...
 * }
**/
```

## Testing

To run tests, use the following command:

```shell
npm run test
```

Provide your own private key in your environment variables or .env file to test the package.

```shell
export SECRET_KEY="[...]"
```

## Contribute

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Reach out

![image0_0-3](https://github.com/sk1ppi/cardano_nami_wallet_recovery/assets/121653522/4dc2f3ff-a082-45fb-80de-d3a32bea18ae)

- [Via e-mail](mailto:kcxyzxyz@icloud.com?subject=Reaching%20out!)

## License

[Apache-2.0](LICENSE)