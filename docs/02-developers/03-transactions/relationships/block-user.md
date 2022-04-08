---
id: block-user
title: Block user
sidebar_label: Block user
slug: block-user
---

# `MsgBlockUser`
This message allows you to block a specific user associated with a given address.

## Structure
```json
{
  "@type": "/desmos.relationships.v1.MsgBlockUser",
  "blocker": "<Desmos address that's blocking someone>",
  "blocked": "<Desmos address that's been blocked>",
  "reason": "<Reason of the block>",
  "subspace_id": "<Subspace of the block>"
}   
```

### Attributes
|   Attribute   |  Type  | Description                                                  | Required |
|:-------------:|:------:|:-------------------------------------------------------------| :------- |
|   `blocker`   | String | Desmos address of the user that is blocking someone else     | yes |
|   `blocked`   | String | Desmos address of the blocked user                           | yes |
|   `reason`    | String | Reason for the block                                         | no |
| `subspace_id` | Uint64 | Identifies the subspace in which the block should be applied | yes |

## Example

````json
{
  "@type": "/desmos.relationships.v1.MsgBlockUser",
  "blocker": "desmos1j83hlf5yn5839wgpege3z669r8j3lh2ggmtf5u",
  "blocked": "desmos15ux5mc98jlhsg30dzwwv06ftjs82uy4g3t99ru",
  "reason": "reason",
  "subspace_id": 1
}   
````

## Message action
The action associated to this message is the following: 

```
block_user
```
