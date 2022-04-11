---
id: delete-profile
title: Delete profile
sidebar_label: Delete profile
slug: delete-profile
---

# `MsgDeleteProfile`
This message allows you to delete a previously created profile.

### Attributes
| Attribute | Type | Description                           | Required |
| :-------: | :----: |:--------------------------------------| :------- |
| `creator` | String | Desmos address of the profile's owner | yes |

## Example

````json
{
  "@type": "/desmos.profiles.v2.MsgDeleteProfile",
  "creator": "desmos1qchdngxk8zkl4c4mheqdlpgcegkdrtucmwllpx"
}
````

## Message action
The action associated to this message is the following:

```
delete_profile
```