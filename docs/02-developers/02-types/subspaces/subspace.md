# Subspace
Inside Desmos, subspaces are zones where applications live separated one from another with their own term of services, users and contents.
Inside subspaces users can:
- **Set permissions**:  
  If a user is the subspace owner or an admin it can set permissions for other users to allow them to perform actions like 
  create contents, manage groups, moderate other users, etc...
- **Create groups**:   
  Groups contains users and has their own set of permissions.

## Attributes
Following you can find the subspace attributes.

## `ID`
The `ID` uniquely identifies each subspace. It's a sequential `uint64` assigned by Desmos each time a new subspace is created.

## `Name`
The `Name` is the human-readable name of the subspace. It must be non-empty nor blank.

## `Description`
The `Description` contains a brief summary of what the subspace is about.

## `Treasury`
The `Treasury` represents the account associated with the subspace that should be used to connect external applications to verify it.
It's a string representation of a Bech32 address that begins with the `desmos` human-readable part.

## `Owner`
The `Owner` is the address of the user that owns the subspace.
It's a string representation of a Bech32 address that begins with the `desmos` human-readable part.

## `Creator`
The `Creator` identifies the user that has created the subspace.  
It's a string representation of a Bech32 address that begins with the `desmos` human-readable part.

## `CreationTime`
The time when the subspace has been created.