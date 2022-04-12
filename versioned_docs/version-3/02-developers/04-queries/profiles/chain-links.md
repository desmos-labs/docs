---
id: chain-links
title: Query chain links
sidebar_label: Chain links
slug: chain-links
---

## Query chain links
This query allows you to retrieve all the chain links with optional user `address`, `chain_name` and `target`.

**CLI**
```bash
desmos query profiles chain-links [[user]] [[chain_name]] [[target]] [flags]

# Examples
# desmos query profiles chain-links
# desmos query profiles chain-links desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud
# desmos query profiles chain-links desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud --page=2 --limit=100
# desmos query profiles chain-links desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud "cosmos"
# desmos query profiles chain-links desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud "cosmos" cosmos19s242dxhxgzlsdmfjjg38jgfwhxca7569g84sw
```