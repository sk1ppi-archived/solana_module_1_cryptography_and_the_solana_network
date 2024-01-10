const {
    generateKeypair,
    loadKeypairFromEnvironment
} = require('./index')

describe('generateKeypair', () => {
    it('should generate a keypair with publicKey and secretKey', () => {
        const keypair = generateKeypair()

        expect(keypair).toHaveProperty('publicKey')
        expect(keypair).toHaveProperty('secretKey')
        expect(typeof keypair.publicKey).toBe('string')
        expect(typeof keypair.secretKey).toBe('string')
    })
})

describe('loadKeypairFromEnvironment', () => {
    it('should load a keypair from the environment', () => {
        const keypair = loadKeypairFromEnvironment()

        expect(keypair).toHaveProperty('publicKey')
        expect(keypair).toHaveProperty('secretKey')
        expect(typeof keypair.publicKey).toBe('string')
        expect(typeof keypair.secretKey).toBe('string')
    })
})