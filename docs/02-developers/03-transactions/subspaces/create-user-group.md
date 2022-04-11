---
id: create-user-group
title: Create user group
sidebar_label: Create user group
slug: create-user-group
---

# `MsgCreateUserGroup`
This message allows to create a user group inside a subspace.

### Attributes
|       Attribute       |  Type  | Description                                                        | Required |
|:---------------------:|:------:|:-------------------------------------------------------------------|:---------|
|     `subspace_id`     | Uint64 | Unique id of the subspace where to create the group                | yes      |
|        `name`         | String | Human-readable name of the group                                   | yes      |
|     `description`     | String | Description of the group                                           | no       |
| `default_permissions` | Uint32 | Default permissions of the group combined and represent as integer | no       |
|   `creator`           | String | Address of the group creator                                       | yes      |

## Example
````json
{
  "@type": "/desmos.subspaces.v1.MsgCreateUserGroup",
  "subspace_id": "1",
  "name": "Admins",
  "description": "Group of the subspace admins",
  "default_permissions": 19,
  "creator": "desmos1nwp8gxrnmrsrzjdhvk47vvmthzxjtphgxp5ftc"
}
````

## Message action
The action associated to this message is the following:
```
create_user_group
```