---
title: <% tp.user.to_pascal_case(await tp.user.get_or_ask_for_title(tp)) %>
tags:
  - ancestry

cover: ""
---

## Flavors

The available flavors at your choosing:
<%* const title = tp.frontmatter["title"] -%>

<% (await tp.system.prompt("Please enter flavors one per line", "a", false, true)).split("\n").map(prop => `- [[${prop}]]`).sort().join("\n") %>
<%- await tp.file.rename(tp.user.to_kebab_case(title)) _%>
