# Subspace
Inside Desmos, subspaces are zones where applications live separated one from another with their own term of services, users and contents.
Inside subspaces users can:
- **Set permissions**:  
  If a user is the subspace owner or an admin it can set permissions for other users to allow them to perform actions like 
  create contents, manage groups, moderate other users, etc...
- **Create groups**:   
  Groups contain users and have their own set of permissions.

## Attributes
Following you can find the subspace attributes.

## `ID`
The `ID` uniquely identifies each subspace. It's a sequential `uint64` assigned by Desmos each time a new subspace is created.

## `Name`
The `Name` is the human-readable name of the subspace. It must be non-empty nor blank.

## `Description`
The `Description` contains a brief summary of what the subspace is about.

## `Treasury`
The `Treasury` is a Desmos address that can be used to connect external applications to verify it.

## `Owner`
The `Owner` is the Desmos address of the user that owns the subspace.

## `Creator`
The `Creator` identifies the Desmos address of user that has created the subspace.

## `CreationTime`
The time when the subspace has been created. This will be automatically be assigned by Desmos during the creation process of the subspace, it should not be provided when creating a subspace.