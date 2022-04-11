---
id: blocked-users
title: Query Blocked users
sidebar_label: Blocked users
slug: blocked-users
---

## Query blocked users
This query allows you to retrieve all the blocks made inside the given subspace-id.
An optional blocker and blocked addresses can be passed to the query to retrieve specific's blocker's blocks.

**CLI**
```bash
desmos query relationships blocks [subspace-id] [[blocker]] [[blocked]] [flags]

# Examples
# desmos query relationships blocks 1
# desmos query relationships blocks 1 desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud
# desmos query relationships blocks 1 desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud --page=2 --limit=100
# desmos query relationships blocks 1 desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud desmos159axlj0mkvch02f95t5tkghychyeueaslk6r8f
```