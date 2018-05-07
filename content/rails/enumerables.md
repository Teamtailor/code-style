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

Adding new columns with a default value to a large table will lock it while updating all existing records

```ruby
  # bad for big table
  add_column :user, :status, :integer, default: 0

  # good
  add_column :user, :status, :integer
  change_column_default :users, :default, 0
```

### Prefer past tense for name enum elements. Do not use reserved ruby/rails keywords.

```ruby
  # Good
  enum status: { archived: 0, finished: 1 }

  # Bad
  enum status: { new: 0, open: 1 } # reserved rails/ruby keyword
  enum status: { archive: 0, finish: 1 } # present tense
```

### Prefer enumerable over boolean flags

Usually it is better to use an enumerable over a boolean flag. They are easier to extend with new statuses and has some helpful methods.

```ruby
  class User < ApplicationRecord
     enum status: { created: 0, updated: 1 }
  end

  # instance methods:
  user = User.last
  user.created! # change status to created and save it
  user.created? # => true
  user.status # => archived

  # scopes
  User.archived == User.where(status: :archived)
```
