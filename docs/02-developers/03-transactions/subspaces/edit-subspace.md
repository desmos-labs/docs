---
id: edit-subspace
title: Edit subspace
sidebar_label: Edit subspace
slug: edit-subspace
---

# `MsgEditSubspace`
This message allows to edit an existent subspace.

## Structure
````json
{
  "@type": "/desmos.subspaces.v1.MsgEditSubspace",
  "subspace_id": "<Unique id that identifies the subspace>",
  "name": "<Human-readable name of the subspace>",
  "description": "<Summary of what the subspace is about>",
  "treasury": "<Desmos address of the treasury associated with the subspace>",
  "owner": "<Desmos address of the subspace owner>",
  "signer": "<Desmos address of the msg signer>"
}
````

### Attributes
|   Attribute   | Type | Description                                                              | Required |
|:-------------:| :----: |:-------------------------------------------------------------------------|:---------|
| `subspace_id` | Uint64 | Unique id that identifies the subspace                                   | yes      |
|    `name`     | String | Human-readable name of the subspace                                      | no       |
| `description` | String | Brief summary of what the subspace is about                              | no       |
|  `treasury`   | String | Address associated with the subspace used to connect it to external apps | no       |
|    `owner`    | String | Address of the owner of the subspace                                     | no       |
|   `signer`    | String | Address of the signer of the msg                                         | no       |

## Example
````json
{
  "@type": "/desmos.subspaces.v1.MsgEditSubspace",
  "subpspace_id": 1,
  "name": "test",
  "description": "This is a test subspace",
  "treasury": "desmos1rfv0f7mx7w9d3jv3h803u38vqym9ygg344asm3",
  "owner": "desmos1rfv0f7mx7w9d3jv3h803u38vqym9ygg344asm3",
  "signer": "desmos1nwp8gxrnmrsrzjdhvk47vvmthzxjtphgxp5ftc"
}
````

## Message action
The action associated to this message is the following:
```
edit_subspace
```