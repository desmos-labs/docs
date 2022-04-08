---
id: delete-user-group
title: Delete user group
sidebar_label: Delete user group
slug: delete-user-group
---

# `MsgDeleteUserGroup`
This message allows to delete a user group.

## Structure
````json

````

### Attributes
|   Attribute   |  Type  | Description                               | Required |
|:-------------:|:------:|:------------------------------------------|:---------|
| `subspace_id` | Uint64 | Id of the subspace where the group exists | yes      |
|  `group_id`   | Uint32 | Id of the group to delete                 | yes      |
|   `signer`    | String | Address of the user that sign the msg     | yes      |

## Example
````json
{
  "@type": "/desmos.subspaces.v1.MsgDeleteUserGroup",
  "subspace_id": "1",
  "group_id": 1,
  "signer": "desmos1nwp8gxrnmrsrzjdhvk47vvmthzxjtphgxp5ftc"
}
````

## Message action
The action associated to this message is the following:
```
delete_user_group
```