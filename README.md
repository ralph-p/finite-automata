# finite-automata
A Finite Automata to solve mod 3
## Getting Started

First, run the development server:

```
git clone git@github.com:ralph-p/finite-automata.git
cd finite-automata/client
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Findings:

### 110111111101111011111111111111111111111101010101110000000000000000001 returning the incorrect response

`11011111110111101111111111111111111111110101010111000000000000000000` ends on `S2` which is `2`, when a `1` is added the stream the FSM stays on `S2` per the rules `110111111101111011111111111111111111111101010101110000000000000000001` ends on `S2` which is `2` however parsing the input `11011111110111101111111111111111111111110101010111000000000000000000` = `258105798244051980000` % 3 = 2, when a `1` is added we get `110111111101111011111111111111111111111101010101110000000000000000001` = `516211596488103950000` % 3 = `1`