---
id: set-user-permissions
title: Set user permissions
sidebar_label: Set user permissions
slug: set-user-permissions
---

# `MsgSetUserPermissions`
This message allows setting user permissions.

### Attributes
| Attribute | Type | Description                                   | Required |
| :-------: | :----: |:----------------------------------------------| :------- |
| `subspace_id` | Uint64 | Id of the subspace where the group exists     | yes      |
|  `group_id`   | Uint32 | Id of the group where to add the user         | yes      |
| `permissions` | Uint32 | Permissions to be set for a user of the group | yes      |
|   `signer`    | String | Address of the user that sign the msg         | yes      |

## Example
````json
{
  "@type": "/desmos.subspaces.v1.MsgSetUserGroupPermissions",
  "subspace_id": "1",
  "group_id": 1,
  "permissions": 1,
  "signer": "desmos1nwp8gxrnmrsrzjdhvk47vvmthzxjtphgxp5ftc"
}
````

## Message action
The action associated to this message is the following:
```
set_user_permissions
```