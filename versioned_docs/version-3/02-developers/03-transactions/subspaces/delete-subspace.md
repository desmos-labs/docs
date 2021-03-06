---
id: delete-subspace
title: Delete subspace
sidebar_label: Delete subspace
slug: delete-subspace
---

# `MsgDeleteSubspace`
This message allows to delete an existent subspace.

### Attributes
| Attribute | Type | Description | Required |
| :-------: | :----: | :-------- | :------- |
| `subspace_id` | Uint64 | Unique id that identifies the subspace | yes |
| `signer` | String | Address of the signer of the message | yes | 

## Example
````json
{
  "@type": "/desmos.subspaces.v1.MsgDeleteSubspace",
  "subspace_id": "1",
  "signer": "desmos1nwp8gxrnmrsrzjdhvk47vvmthzxjtphgxp5ftc"
}
````

## Message action
The action associated to this message is the following:
```
delete_subspace
```