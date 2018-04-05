---
title: Use `==` for checking equal, skip `eql?`
language: rails
---

    # Good
    foo == "bar"

    # Bad
    foo.eql? "bar"
