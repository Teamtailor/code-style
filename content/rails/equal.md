---
title: Use <code>==</code> for checking equal, skip <code>eql?</code>
language: rails
---

    # Good
    foo == "bar"

    # Bad
    foo.eql? "bar"
