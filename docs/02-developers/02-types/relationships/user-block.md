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
The `SubspaceID` field identifies the application where the block has been made.