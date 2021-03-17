# win1252-filter

Filters out non [windows-1252](https://en.wikipedia.org/wiki/Windows-1252) characters from an input string.

## Usage

```
yarn add win1252-filter
```

```ts
import { win1252Filter } from "win1252-filter";

const input = "Hello😁world";
const output = win1252Filter(input);
// output is now "Helloworld"
```
