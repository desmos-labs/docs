---
id: user-block
title: User block
sidebar_label: User block
slug: user-block
---

# User Block
Inside Desmos, a `UserBlock` identifies the fact that a user blocked another one.

## Attributes
`UserBlock` contains data that allows users to create the most complete report they need.

### `Blocker` (`string`)
The address of the user blocking another one.

### `Blocked` (`string`)
The address of the blocked user.

### `Reason` (`string`)
The reason why the user has been blocked for.

### `SubspaceID` (`uint64`)
Id of the subspace inside which the user has been blocked.  

:::note
If set to `0`, the `Blocker` will block the `Blocked` user inside the generic "Desmos" subspace. This is useful when a user wants to block any future DTag transfer request from a bad user.  
Blocking someone for the `0` subspace **will not** block it on other subspaces, so other interactions might still be performed there.
:::