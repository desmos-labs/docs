---
id: application-links
title: Query application links
sidebar_label: Application links
slug: application-link
---
## Query application links
This query allows you to retrieve the application links with the optional user `address`.

**CLI**
```bash
desmos query profiles app-links [[user]] [[application]] [[username]]

# Examples
# desmos query profiles app-links 
# desmos query profiles app-links desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud
# desmos query profiles app-links desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud "twitter"
# desmos query profiles app-links desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud "twitter" "twitter_user"
```