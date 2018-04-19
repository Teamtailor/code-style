---
title: Enumerables
language: rails
---

### Prefer hash syntax for enumerables

```ruby
  # Good
  enum status: { created: 0, updated: 1 }

  # Bad
  enum status:  %w(created updated)
  enum status: [:created :updated]
```

### Be careful with migration when you add `default` in enumerable.

Using defaults on big table may kill database, because it have to update all records

```ruby
  add_column :user, :status, :integer, default: 0
```

### Prefer past tense for name enum elements. Do not use reserved rails name.

```ruby
  # Good
  enum status: { archived: 0, finished: 1 }

  # Bad
  enum status: { new: 0, open: 1 } # reserved rails/ruby name
  enum status: { archive: 0, finish: 1 } # present tense
```

### Prefer enumerable instead of flags

Usually it is better to use enumerable. Enumerables are easy to extend with another status and has few hepefull method.
Flags are not bad, however too many flags are not good.

```ruby
  # Good
  enum status: { archived: 0, finished: 1 }
  add_column :post, :status, :integer, default: 0

  # Bad

  add_column :post, :archived, :boolean
  add_column :post, :finished, :boolean
```
