---
id: tools-to-build
title: Tools to build DApps
sidebar_label: Tools to build DApps
slug: tools-to-build
---

# Tools to build DApps
In order to let developers easily interact with the Desmos blockchain, we have developed a series of tools that will ease the development of DApps.

## DesmJS

To make it easy to develop dApps on the top of the Desmos chain we have built a `typescript` framework called **DesmJS**. DesmJS is based on to the analog framework for Cosmos based chains [CosmJS](https://github.com/cosmos/cosmjs) but focused on Desmos. DesmJS contains 3 different packages, each one with a specific scope:
1. The [@desmoslabs/desmjs](https://www.npmjs.com/package/@desmoslabs/desmjs) package contains the client that allows to easily create, sign and broadcast transactions containing Desmos (and Cosmos) messages;
2. The [@desmoslabs/desmjs-types](https://www.npmjs.com/package/@desmoslabs/desmjs-types) package contains the Desmos types protobuf definitions;
3. The [@desmoslabs/desmjs-walletconnect](https://www.npmjs.com/package/@desmoslabs/desmjs-walletconnect) package contains a `WalletConnectSigner` which implements `@desmoslabs/desmjs` `Signer` interface by signing transactions through a WalletConnect client.

The above packages can be found on the official [GitHub Repository](https://github.com/desmos-labs/desmjs) of DesmJS.

### Example 1: Client
Here below you can see a usage example of the `DesmosClient` from the `desmjs` package:
```js reference
https://github.com/desmos-labs/dpm/blob/4a3d1302acc66296ad9342ff8a5637c3ff90707f/src/contexts/DesmosClientContext.tsx#L7-L45
```

### Example 2: Types
The following example shows the usage of `desmjs-types` package for the creation of a `ProfileSource` class to be used for fetching and storing a user Desmos' profile:
```js reference
https://github.com/desmos-labs/dpm/blob/4a3d1302acc66296ad9342ff8a5637c3ff90707f/src/sources/ProfileSource.ts#L16-L28
```

##### Profile hook
The following example use the previous `ProfileSource` class combined with other  client's related components to build a hook in order to fetch the Desmos Profile from the chain:
```js reference
https://github.com/desmos-labs/dpm/blob/58cb919fe4a5224aeb38bd985da1b8ce9d396747/src/hooks/useFetchProfile.ts#L13-L45
```

#### Example 3: Wallet Connect