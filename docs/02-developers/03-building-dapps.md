---
id: building-dapp
title: building-dapp
sidebar_position: 3
---

# Building a dApp

## DesmJS

To make it easy to develop dApps on the top of the Desmos chain we have built a `typescript` framework called **DesmJS**. DesmJS is based on to the analog framework for Cosmos based chains [CosmJS](https://github.com/cosmos/cosmjs) but focused on Desmos. DesmJS contains 3 different packages, each one with a specific scope:
* The [@desmoslabs/desmjs](https://www.npmjs.com/package/@desmoslabs/desmjs) package contains the client that allows to easily create, sign and broadcast transactions containing Desmos (and Cosmos) messages;
* The [@desmoslabs/desmjs-types](https://www.npmjs.com/package/@desmoslabs/desmjs-types) package contains the Desmos types protobuf definitions;
* The [@desmoslabs/desmjs-walletconnect](https://www.npmjs.com/package/@desmoslabs/desmjs-walletconnect) package contains a `WalletConnectSigner` which implements `@desmoslabs/desmjs` `Signer` interface by signing transactions through a WalletConnect client.

The above packages can be found on the official [GitHub Repository](https://github.com/desmos-labs/desmjs) of DesmJS.

### Integration example
Here below an example of an integration with DesmJS:
```typescript

```