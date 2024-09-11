# HashMap Implementation in JavaScript

This repository provides a custom implementation of a `HashMap` data structure in JavaScript, designed to handle basic operations such as adding, retrieving, removing, and managing key-value pairs.

## Features

- **Efficient Key-Value Storage**: Supports setting, getting, and removing key-value pairs.
- **Collision Handling**: Uses separate chaining to handle hash collisions.
- **Dynamic Operations**: Provides utility methods to manage and query the stored data.

## Usage

### Example

```javascript
const hashMap = new HashMap();

hashMap.set("Carlos", "I am the old value.");
hashMap.set("Carlos", "I am the new value.");
console.log(hashMap.get("Carlos")); // Output: I am the new value.
console.log(hashMap.has("Carlos")); // Output: true

hashMap.remove("Carlos");
console.log(hashMap.has("Carlos")); // Output: false

hashMap.set("Alice", "Hello");
console.log(hashMap.keys()); // Output: ['Alice']
console.log(hashMap.values()); // Output: ['Hello']
console.log(hashMap.entries()); // Output: [['Alice', 'Hello']]
