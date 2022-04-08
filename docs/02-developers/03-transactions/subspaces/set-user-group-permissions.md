---
id: set-user-group-permissions
title: Set user group permissions
sidebar_label: Set user group permissions
slug: set-user-group-permissions
---

# `MsgSetUserGroupPermissions`
This message allows to set a user group permissions.

## Structure
````json

````

### Attributes
|   Attribute   |  Type  | Description                                                             | Required |
|:-------------:|:------:|:------------------------------------------------------------------------|:---------|
| `subspace_id` | Uint64 | Id of the subspace where the group exists                               | yes      |
|  `group_id`   | Uint32 | Id of the group to which we need to set the permission for              | yes      |
| `permissions` | Uint32 | Permissions to be set for the group combined and represented as integer | yes      |
|    `signer`    | String | Address of the signer of the msg                                        | yes      |

## Example
````json
{
  "@type": "/desmos.subspaces.v1.MsgSetUserGroupPermissions",
  "subspace_id": "1",
  "group_id": 1,
  "permissions": 3,
  "signer": "desmos1nwp8gxrnmrsrzjdhvk47vvmthzxjtphgxp5ftc"
}
````

## Message action
The action associated to this message is the following:
```
set_user_group_permissions
```