---
id: delete-relationship
title: Delete relationship
sidebar_label: Delete relationship
slug: delete-relationship
---

# `MsgDeleteRelationship`
This message allows you to delete an existing relationship with a specified counterparty.

## Structure
````json
{
  "@type": "/desmos.relationships.v1.MsgDeleteRelationship",
  "signer": "<Desmos address of the user deleting the relationship>",
  "counterparty": "<Desmos address with which the signer want to end the relationship>",
  "subspace_id": "<Subspace of the relationship>"
}
````

### Attributes
|   Attribute    |  Type  | Description                                                    | Required |
|:--------------:|:------:|:---------------------------------------------------------------| :------- |
|    `signer`    | String | Desmos address of the user deleting the relationship           | yes |
| `counterparty` | String | Desmos address of the relationship's counterparty              | yes |
| `subspace_id`  | Uint64 | Identifies the subspace where the relationship should be valid | yes |

## Example

````json
{
  "@type": "/desmos.relationships.v1.MsgDeleteRelationship",
  "signer": "desmos1e209r8nc8qdkmqujahwrq4xrlxhk3fs9k7yzmw",
  "counterparty": "desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud",
  "subspace_id": 1
} 
````

## Message action
The action associated to this message is the following: 

```
delete_relationship
```
