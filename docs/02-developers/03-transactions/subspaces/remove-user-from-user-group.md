---
id: remove-user-from-user-group
title: Remove user from user group
sidebar_label: Remove user from user group
slug: remove-user-from-user-group
---

# `MsgRemoveUserFromUserGroup`
This message allows to remove a user from a user group.

### Attributes
| Attribute | Type | Description                                      | Required |
| :-------: | :----: |:-------------------------------------------------| :------- |
| `subspace_id` | Uint64 | Id of the subspace where the group exists        | yes      |
|  `group_id`   | Uint32 | Id of the group where to remove the user from    | yes      |
|     `user`     | String | Address of the user to be removed from the group | yes      |
|   `signer`    | String | Address of the user that sign the message        | yes      |

## Example
````json
{
  "@type": "/desmos.subspaces.v1.MsgRemoveUserFromUserGroup",
  "subspace_id": "1",
  "group_id": 1,
  "user": "desmos1p8r4guvdze03md4g9zclhh6mr8ljvtd80pehr3",
  "signer": "desmos1nwp8gxrnmrsrzjdhvk47vvmthzxjtphgxp5ftc"
}
````

## Message action
The action associated to this message is the following:
```
remove_user_from_user_group
```