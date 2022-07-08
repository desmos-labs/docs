---
id: tools-to-build
title: Tools to build DApps
sidebar_label: Tools to build DApps
slug: tools-to-build
---

# Tools to build DApps
In order to let developers easily interact with the Desmos blockchain, we have developed a series of tools that will ease the development of DApps.

## DesmJS

To make it easy to develop dApps on the top of the Desmos chain we have built a `typescript` framework called **DesmJS**. 
DesmJS is based on to the analog framework for Cosmos based chains [CosmJS](https://github.com/cosmos/cosmjs) but focused on Desmos. 
DesmJS contains 3 different packages, each one with a specific scope:
1. The [@desmoslabs/desmjs](https://www.npmjs.com/package/@desmoslabs/desmjs) package contains the client that allows to easily create, sign and broadcast transactions containing Desmos (and Cosmos) messages;
2. The [@desmoslabs/desmjs-types](https://www.npmjs.com/package/@desmoslabs/desmjs-types) package contains the Desmos types protobuf definitions;
3. The [@desmoslabs/desmjs-walletconnect](https://www.npmjs.com/package/@desmoslabs/desmjs-walletconnect) package contains a `WalletConnectSigner` which implements `@desmoslabs/desmjs` `Signer` interface by signing transactions through a WalletConnect client.

The above packages can be found on the official [GitHub Repository](https://github.com/desmos-labs/desmjs) of DesmJS.

## Install DesmJS

```shell
npm install @desmoslabs/desmjs @desmoslabs/desmjs-types
# or
yarn add @desmoslabs/desmjs @desmoslabs/desmjs-types
```

## Send your first transaction

```javascript
import {
    DesmosClient,
    SigningMode,
    OfflineSignerAdapter,
    assertIsDeliverTxSuccess
} from "@desmoslabs/desmjs";


const mnemonic = "math track fish reopen project latin radio spoon please table between install cheap smile deer glide desk license bench vapor chef sock list case";
const rpcEndpoint = "https://rpc.my_tendermint_rpc_node";
const signer = await OfflineSignerAdapter.fromMnemonic(SigningMode.DIRECT, mnemonic);
const [firstAccount] = await signer.getAccounts();

const client = await DesmosClient.connectWithSigner(rpcEndpoint, signer);


const recipient = "desmos1ptvq7l4jt7n9sc3fky22mfvc6waf2jd8nuc0jv";
const amount = {
    denom: "udsm",
    amount: "1337420",
};
const result = await client.sendTokens(firstAccount.address, recipient, [amount], "Have fun with your coins");
assertIsDeliverTxSuccess(result);
```

This is a very easy example but maybe you want to interact with some of the Desmos modules like the **profiles** or **posts**. 
Let's see an example of profile creation and post creation.

### Example 1: Create a profile

```javascript
import { 
    DesmosClient, 
    SigningMode, 
    OfflineSignerAdapter,
    assertIsDeliverTxSuccess,
    MsgSaveProfileEncodeObject
} from "@desmoslabs/desmjs";
import {
    MsgSaveProfile,
} from "@desmoslabs/desmjs-types/desmos/profiles/v2/msgs_profile";


const mnemonic = "math track fish reopen project latin radio spoon please table between install cheap smile deer glide desk license bench vapor chef sock list case";
const rpcEndpoint = "https://rpc.my_tendermint_rpc_node";
const signer = await OfflineSignerAdapter.fromMnemonic(SigningMode.DIRECT, mnemonic);
const [firstAccount] = await signer.getAccounts();

const client = await DesmosClient.connectWithSigner(rpcEndpoint, signer);

const msg: MsgSaveProfileEncodeObject = {
    typeUrl: "/desmos.profiles.v2.MsgSaveProfile",
    value: MsgSaveProfile.fromPartial({
        dtag: "frieza",
        nickname: "Frieza",
        bio: "A weakling like you could never overcome me!",
        profilePicture: "https://link_to_profile_picture",
        coverPicture: "https://link_to_cover_picture",
        creator: firstAccount.address,
    })
}

const result = await client.signAndBroadcast(firstAccount.address, [msg], "auto");
assertIsDeliverTxSuccess(result);
```

### Example 2: Create a post

```javascript
import { 
    DesmosClient, 
    SigningMode, 
    OfflineSignerAdapter, 
    assertIsDeliverTxSuccess, 
    MsgCreatePostEncodeObject 
} from "@desmoslabs/desmjs";
import {
    MsgCreatePost,
} from "@desmoslabs/desmjs-types/desmos/posts/v2/msgs";
import { ReplySetting } from "@desmoslabs/desmjs-types/desmos/posts/v2/models";
import Long from "long";


const mnemonic = "math track fish reopen project latin radio spoon please table between install cheap smile deer glide desk license bench vapor chef sock list case";
const rpcEndpoint = "https://rpc.my_tendermint_rpc_node";
const signer = await OfflineSignerAdapter.fromMnemonic(SigningMode.DIRECT, mnemonic);
const [firstAccount] = await signer.getAccounts();

const client = await DesmosClient.connectWithSigner(rpcEndpoint, signer);

const msg: MsgCreatePostEncodeObject = {
    typeUrl: "/desmos.posts.v2.MsgCreatePost",
    value: MsgCreatePost.fromPartial({
        subspaceId: Long.fromNumber(1),
        sectionId: 0,
        text: "Test post",
        author: firstAccount.address,
        replySettings: ReplySettings.REPLY_SETTING_EVERYONE,
    })
}

const result = await client.signAndBroadcast(firstAccount.address, [msg], "auto");
assertIsDeliverTxSuccess(result);
```

### Example 3: Sign with wallet connect

make sure to install the wallet connect package with the following command:

```shell
npm install @desmoslabs/desmjs-walletconnect
# or
yarn add @desmoslabs/desmjs-walletconnect
```

```javascript
import {
  WalletConnect,
  QRCodeModal,
  WalletConnectSigner,
} from "@desmoslabs/desmjs-walletconnect";
import { DesmosClient, SigningMode, assertIsDeliverTxSuccess, MsgSaveProfileEncodeObject } from "@desmoslabs/desmjs";
import {
    MsgSaveProfile,
} from "@desmoslabs/desmjs-types/desmos/profiles/v2/msgs_profile";


const connector = new WalletConnect({
    bridge: "https://bridge.walletconnect.org",
    qrcodeModal: QRCodeModal,
});
const signer = new WalletConnectSigner(this.connector, {
    signingMode: SigningMode.AMINO,
});

// Show the walletconnect modal to allow connection from a client
await signer.connect();

const rpcEndpoint = "https://rpc.my_tendermint_rpc_node";
const [firstAccount] = await signer.getAccounts();

const client = await DesmosClient.connectWithSigner(rpcEndpoint, signer);

const msg: MsgSaveProfileEncodeObject = {
    typeUrl: "/desmos.profiles.v2.MsgSaveProfile",
    value: MsgSaveProfile.fromPartial({
        dtag: "frieza",
        nickname: "Frieza",
        bio: "A weakling like you could never overcome me!",
        profilePicture: "https://link_to_profile_picture",
        coverPicture: "https://link_to_cover_picture",
        creator: firstAccount.address,
    })
}

const result = await client.signAndBroadcast(firstAccount.address, [msg], "auto");
assertIsDeliverTxSuccess(result);
```
