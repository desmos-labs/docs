---
id: link-chain-account
title: Link chain account
sidebar_label: Link chain account
slug: link-chain-account
---

# `MsgLinkChainAccount`
This message allows you to link an external chain address 
and add the [chain link](../../02-types/profiles/chain-link.md) of it to your Desmos profile.

## Structure

```json
{
  "@type": "/desmos.profiles.v2.MsgLinkChainAccount",
  "chain_address": {
    "@type": "/desmos.profiles.v2.Bech32Address",
    "prefix": "<Bech32 prefix of the external chain account>",
    "value": "<Address of the external chain account>"
  },
  "chain_config": {
    "name": "<Name of the target external chain>"
  },
  "proof": {
    "pub_key": {
      "@type": "/cosmos.crypto.secp256k1.PubKey",
      "value": "<Base64 encoded public key>"
    },
    "signature": {
      "@type": "/desmos.profiles.v2.SingleSignatureData",
      "mode": "<Signature mode applied>",
      "signature": "<Hex encoded signature created with private key associated to the given public key>"
    },
    "plain_text": "<Hex encoded text signed with private key that produce the signature>"
  },
  "signer": "<Desmos address of the profile linking the chain account>"
}
```

### Attributes

| Attribute | Type | Description | Required |
| :-------: | :----: | :-------- | :------- |
| `chain_address` | [AddressData](../../02-types/profiles/chain-link.md#Contained-data) | Address data of the external chain account | yes |
| `chain_config` | [ChainConfig](../../02-types/profiles/chain-link.md#Contained-data) | Details of the target external chain | yes |
| `proof` | [Proof](../../02-types/profiles/chain-link.md#Contained-data) | Data proving the ownership of the external chain account | yes |
| `signer` | String | Desmos address of the profile with which the link will be associated | yes |


## Example

```json
{
  "@type": "/desmos.profiles.v2.MsgLinkChainAccount",
  "chain_address": {
    "@type": "/desmos.profiles.v2.Bech32Address",
    "value": "cosmos18xnmlzqrqr6zt526pnczxe65zk3f4xgmndpxn2",
    "prefix": "cosmos"
  },
  "proof": {
    "pub_key": {
      "@type": "/cosmos.crypto.secp256k1.PubKey",
      "key": "AyRUhKXAY6zOCjjFkPN78Q29sBKHjUx4VSZQ4HXh66IM"
    },
    "signature": {
      "@type": "/desmos.profiles.v2.SingleSignatureData",
      "mode": "SIGN_MODE_DIRECT",
      "signature": "C7xppu4C4S3dgeC9TVqhyGN1hbMnMbnmWgXQI2WE8t0oHIHhDTqXyZgzhNNYiBO7ulno3G8EXO3Ep5KMFngyFg=="
    },
    "plain_text": "636f736d6f733138786e6d6c7a71727172367a74353236706e637a786536357a6b33663478676d6e6470786e32"
  },
  "chain_config": {
    "name": "cosmos"
  },
  "signer": "desmos1nwp8gxrnmrsrzjdhvk47vvmthzxjtphgxp5ftc"
}
```

## Message action
The action associated to this message is the following:

```
link_chain_account
```