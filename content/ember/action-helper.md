---
title: Always use the `action` keyword to pass actions.
language: ember
---

    {{! Good }}
    {{edit-page page=page onDeletePost=(action "handleDeletePost")}}

    {{! Bad, better bad example }}
    {{edit-page page=page onDeletePost="handleDeletePost"}}
