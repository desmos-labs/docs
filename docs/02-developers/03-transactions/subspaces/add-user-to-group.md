---
id: add-user-to-group
title: Add user to group
sidebar_label: Add user to group
slug: add-user-to-group
---

# `MsgAddUserToGroup`
This message allows to add a user to a user group.

### Attributes
|   Attribute   |  Type  | Description                                                | Required |
|:-------------:|:------:|:-----------------------------------------------------------|:---------|
| `subspace_id` | Uint64 | Id of the subspace where the group exists                  | yes      |
|  `group_id`   | Uint32 | Id of the group where to add the user                      | yes      |
|     `user`     | String | Address of the user to be inserted in the group            | yes      |
|   `signer`    | String | Address of the owner that is adding the user to the group  | yes      |

## Example
````json
{
  "@type": "/desmos.subspaces.v1.MsgAddUserToUserGroup",
  "subspace_id": "1",
  "group_id": 1,
  "user": "desmos1p8r4guvdze03md4g9zclhh6mr8ljvtd80pehr3",
  "signer": "desmos1nwp8gxrnmrsrzjdhvk47vvmthzxjtphgxp5ftc"
}
````

## Message action
The action associated to this message is the following:
```
add_user_to_user_group
```