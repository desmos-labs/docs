---
id: create-subspace
title: Create subspace
sidebar_label: Create subspace
slug: create-subspace
---

# `MsgCreateSubspace`
This message allows to create a subspace.

## Structure
````json
{
  "@type": "/desmos.subspaces.v1.MsgCreateSubspace",
  "name": "<Human-readable name of the subspace>",
  "description": "<Summary of what the subspace is about>",
  "treasury": "<Desmos address of the treasury associated with the subspace>",
  "owner": "<Desmos address of the subspace owner>",
  "creator": "<Desmos address of the subspace creator>"
}
````

### Attributes
| Attribute | Type | Description                                 | Required |
| :-------: | :----: |:--------------------------------------------|:---------|
| `name` | String | Human-readable name of the subspace| yes      |
| `description` | String | Brief summary of what the subspace is about | no       |
| `treasury` | String | Address associated with the subspace used to connect it to external apps | no       |
| `owner` | String | Address of the owner of the subspace | yes      |
| `creator` | String | Address of the creator of the subspace | yes      |
 
## Example
````json
{
  "@type": "/desmos.subspaces.v1.MsgCreateSubspace",
  "name": "test",
  "description": "This is a test subspace",
  "treasury": "desmos1rfv0f7mx7w9d3jv3h803u38vqym9ygg344asm3",
  "owner": "desmos1rfv0f7mx7w9d3jv3h803u38vqym9ygg344asm3",
  "creator": "desmos1nwp8gxrnmrsrzjdhvk47vvmthzxjtphgxp5ftc"
}
````

## Message action
The action associated to this message is the following:
```
create_subspace
```