---
id: unblock-user
title: Unblock user
sidebar_label: Unblock User
slug: unblock-user
---

# `MsgUnblockUser`
This message allows you to unblock a previously blocked user.

|   Attribute   |  Type  | Description | Required |
|:-------------:|:------:| :-------- | :------- |
|   `blocker`   | String | Desmos address of the user that is blocking someone else | yes |
|   `blocked`   | String | Desmos address of the unblocked user | yes |
| `subspace_id` | Uint64 | String that identifies the app for which the block was valid | yes |

## Example

````json
{
  "@type": "/desmos.relationships.v1.MsgUnblockUser",
  "blocker": "desmos1j83hlf5yn5839wgpege3z669r8j3lh2ggmtf5u",
  "blocked": "desmos15ux5mc98jlhsg30dzwwv06ftjs82uy4g3t99ru",
  "subspace_id": 1
}   
````

## Message action
The action associated to this message is the following: 

```
unblock_user
```
