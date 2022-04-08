# Permission detail
A permission detail contains the data of a permission

## Attributes
The following data defines a permission detail.

### `User`
It represents a user permission

### `Group`
It represents a group permission

# `User`
User is a permission that has been set to a specific user

## Attributes
The following attributes defines a `User` permission.

### `User`
The Bech32 address of the user for which the permission is set.

### `Permission`
The permission set to the user.

# `Group`
Group is a permission that has been set to a user group.

### `GroupID`
Group ID associated with the permission.

### `Permission`
The permission set to the group.