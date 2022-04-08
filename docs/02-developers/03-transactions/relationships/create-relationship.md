---
id: create-relationship
title: Create Relationship
sidebar_label: Create Relationship
slug: create-relationship
---

# `MsgCreateRelationship`
This message allows you to create a relationship between the signer and a specified user.

## Structure
```json
{
  "@type": "/desmos.relationships.v1.MsgCreateRelationship",
  "signer": "<Desmos address of the relationship's creator>",
  "counterparty": "<Desmos address with which create the relationship>",
  "subspace_id": "<Subspace of the relationship>"
}      
```

### Attributes
|   Attribute    |  Type  | Description                                                    | Required |
|:--------------:|:------:|:---------------------------------------------------------------| :------- |
|    `signer`    | String | Desmos address of the relationship's creator                   | yes |
| `counterparty` | String | Desmos address with which create the relationship              | yes |
| `subspace_id`  | Uint64 | Identifies the subspace where the relationship should be valid | yes |

## Example

````json
{
  "@type": "/desmos.relationships.v1.MsgCreateRelationship",
  "signer": "desmos1e209r8nc8qdkmqujahwrq4xrlxhk3fs9k7yzmw",
  "counterparty": "desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud",
  "subspace_id": 1
}    
````

## Message action
The action associated to this message is the following: 

```
create_relationship
```
