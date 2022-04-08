---
id: relationships
title: Query relationships
sidebar_label: Relationships
slug: relationships
---

## Query relationships
This query allows you to retrieve all the relationships made inside the given subspace-id.
An optional creator and counterparty addresses can be passed to the query to retrieve the specific's creator's relationships.

**CLI**
```bash
desmos query relationships relationships [subspace-id] [[creator]] [[counterparty]]

# Examples
# desmos query relationships relationships 1
# desmos query relationships relationships 1 desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud
# desmos query relationships relationships 1 desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud desmos159axlj0mkvch02f95t5tkghychyeueaslk6r8f
```