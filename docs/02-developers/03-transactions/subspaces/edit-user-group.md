---
id: edit-user-group
title: Edit user group
sidebar_label: Edit user group
slug: edit-user-group
---

# `MsgEditUserGroup`
This message allows to edit an existent user group.

## Structure
````json

````

### Attributes
|   Attribute   |  Type  | Description                                          | Required |
|:-------------:|:------:|:-----------------------------------------------------|:---------|
| `subspace_id` | Uint64 | id of the subspaces where the group has been created | yes      |
|  `group_id`   | Uint32 | id of the group to edit                              | yes      |
|    `name`     | String | Human-readable name to edit                          | no       |
| `description` | String | Description of the group to edit                     | no       |
|  `signer`     | String | Address of the editor of the group                   | yes      |
## Example
````json
{
  "@type": "/desmos.subspaces.v1.MsgEditUserGroup",
  "subspace_id": "1",
  "group_id": 1,
  "name": "Edited name",
  "description": "Edited description",
  "signer": "desmos1nwp8gxrnmrsrzjdhvk47vvmthzxjtphgxp5ftc"
}
````

## Message action
The action associated to this message is the following:
```
edit_user_group
```