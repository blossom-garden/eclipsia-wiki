---
title: <% tp.user.to_pascal_case(await tp.user.get_or_ask_for_title(tp)) %>
tags:
  - ancestry-flavours
last-update: <% tp.date.now() %>
cover: ""
---
<%*
const title = tp.frontmatter["title"]
await tp.file.rename(tp.user.to_kebab_case(title));
-%>
<% title %>