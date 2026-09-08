# not-ends-with

A pure utility function to check if a string does not end with a specific suffix.

### `notEndsWith(str, searchString, endPosition?)`

Returns `true` if the string does **not** end with the specified text. It is the inverse of `String.prototype.endsWith`.

**Install:**
- Run: `npm install not-ends-with`

**Parameters:**
- `str` (`string`) — the string to be checked.
- `searchString` (`string`) — the text to search for at the end of `str`.
- `endPosition` (`number`, optional) — the position up to which `str` is considered (same behavior as the native `endsWith`).

**Return:** `boolean`

**Example**
```ts
import { notEndsWith } from 'not-ends-with';

notEndsWith('hello.js', '.ts'); // true
notEndsWith('hello.ts', '.ts'); // false

notEndsWith('hello.ts.bak', '.ts', 8); // false
```