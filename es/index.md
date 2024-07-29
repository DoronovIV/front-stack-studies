# ES 6

## Data types

Data types divide in two major categories.

### Value types
Primitive, value types are 7:  __*null*__, 
    __*undefined*__, 
    __*number*__, 
    __*bigint*__, 
    __*string*__, 
    __*boolean*__, 
    __*symbol*__.  
They are immutable and are handled *by copy*.

### Reference types
Extend __*object*__, e.g. *arrays*, *functions*, *wrappers*, etc.
They can be mutable and are handled by reference to their values in memory.

## Type conversion
When operands have different types, they have to be converted for an expression to evaluate.

Type conversion priority: *string* > *number*. Boolean values convert to whatever previous operand type is.
