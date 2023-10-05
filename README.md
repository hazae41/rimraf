# Arrays

Utilities to deal with arrays

```bash
npm i @hazae41/arrays
```

[**Node Package 📦**](https://www.npmjs.com/package/@hazae41/arrays)

## Features

### Current features
- 100% TypeScript and ESM
- No external dependency
- Unit-tested and benchmarked
- Get the last value
- Get a random value using Math's PRNG
- Get a random value using WebCrypto's CSPRNG

## Usage

### Arrays.last

Get the last value

```tsx
import { Arrays } from "@hazae41/arrays"

const value = Arrays.last([1, 2, 3, 4, 5])
```

### Arrays.random

Get a random value using Math's PRNG

```tsx
import { Arrays } from "@hazae41/arrays"

const value = Arrays.random([1, 2, 3, 4, 5])
```

### Arrays.cryptoRandom

Get a random value using WebCrypto's CSPRNG

```tsx
import { Arrays } from "@hazae41/arrays"

const value = Arrays.cryptoRandom([1, 2, 3, 4, 5])
```