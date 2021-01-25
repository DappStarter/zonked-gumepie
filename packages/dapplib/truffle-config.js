require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney kiwi onion skull drift recipe stick protect idea enroll equal gasp'; 
let testAccounts = [
"0xb02c6404044686913b1c27bd373c5be8cfbe0a78e40cf632f7519f3de76c388e",
"0xc62c96e84280ba3cbbf7ea755fe9510390ed093326bb1c3800b6f6fd23c39186",
"0x309b70f1d0e1f623ca729eb6771b14636c14c58ac911c6d145671de9c61bcb40",
"0x846dfe7cb9d2352702b1797ad895992cb95f6218f357c5c04528884acbd24baf",
"0xa052194af0d145567751c194a81c7dd205f281ad1e11878107c9e01338136f04",
"0x10356c0ea61de9bb52ba45d8a467a78d38b4e5475f762432e25229dba38288fe",
"0x8386cf7337bd6759f21b7dc4fa27b9cb175f8a0c3cee6d976d239e40e3a52696",
"0xc5af63d7d228a740ede96aed08f72d8cec544fd858049126b8f085ce90013e7b",
"0xaf9bbb86e8ae5f226a95182a83b1a65696816880e5faf35972702260d55db90c",
"0x7b5f59c713400e1c51a93c8457af7694859d8fd4942cf6bff1f5f96765fc9e19"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
