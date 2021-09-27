require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remain purity hover knife bottom soda'; 
let testAccounts = [
"0x5ea55b4968b6b14b9d8b29f832ca4d000957dcae405ab8f17709b9f785917bf6",
"0x7f70963ac4e9519f5ce2ed0b3356b82dd890424228f02484b306c8c9c580b540",
"0x2aca0af18cf25b47ad1d728242fec2dc12fbc91533e439cfde3c7599b4390eb8",
"0x6d7052eb5054ab81e2a6981a4a7b9f848cbbd2558501d05deaf162efe5a2cb1e",
"0x5391db510f4dec55502351f33ffd28df2b482b82bde1dce7ab92a216f6ca53ea",
"0x62985be2913b5a87ec7cad403e1cbc4353d595a4a180c1f2807e5edfcfd3d0ec",
"0x38d2c2e8a0d6a5362eac628f0c5d6234758d2a1836b0eebff55648346d5ab427",
"0x133d175719d35bcd9f3d5b12bbbb4613a895b1cca320129cf66aab89732fd394",
"0xd34cb29c7ef6ed43ee8bf6f631bd70a4db56fec235de9d3859898481d41e7c84",
"0x722633577a513faa2b39d9c3b906823a3cc90b77fdcfb22fb03b02f9a84db494"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


