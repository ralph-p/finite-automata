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

## API
Once running you can use `GET http://localhost:3000/api/finite-automaton?states=S0,S1,S2&inputSymbols=0,1&initialState=S0&finalStates=S0,S1,S2&equations=S0,0,S0,1,S1,0,S1,1,S2,0,S2,1&matchingValues=S0,S1,S2,S0,S1,S2&inputString=100` to use the api to get the `state` and `value` for the `FSM`. 

## Findings:

### 110111111101111011111111111111111111111101010101110000000000000000001 returning the incorrect response

`11011111110111101111111111111111111111110101010111000000000000000000` ends on `S2` which is `2`, when a `1` is added the stream the FSM stays on `S2` per the rules `110111111101111011111111111111111111111101010101110000000000000000001` ends on `S2` which is `2` however parsing the input `11011111110111101111111111111111111111110101010111000000000000000000` = `258105798244051980000` % 3 = 2, when a `1` is added we get `110111111101111011111111111111111111111101010101110000000000000000001` = `516211596488103950000` % 3 = `1`