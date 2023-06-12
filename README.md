# finite-automata
Finite Automata(FA) is the simplest machine to recognize patterns. The finite automata or finite state machine is an abstract machine that has five elements or tuples. It has a set of states and rules for moving from one state to another but it depends upon the applied input symbol. Basically, it is an abstract model of a digital computer.
Formal specification of machine is (Q, Σ, q, F, δ) 
# Getting Started

First, run the development server:

```
git clone git@github.com:ralph-p/finite-automata.git
cd finite-automata/client
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
# Features
## Front End
- Written in NextJS using TypeScript and Twilwind CSS for styling. 
- Home page that breaks down what a FSM is
- Mod 3 Example page
    - An input where you can enter a binary string
    - A visualizer to show the states what state you are currently on
    - Table to show the transitions
- Builder (under construction)
    - Create all (Q, Σ, q, F, δ)  elements and run the FSM
    - A visualizer to show the states what state you are currently on 
- Used `D3` visualizer package to crete the states dynamically
- Used `WAVE Web Accessibility Evaluation Tools` to remove any errors for Accessibility
## API
NextJS provides serverless API routes. 
Once running you can use `GET http://localhost:3000/api/finite-automaton?states=S0,S1,S2&inputSymbols=0,1&initialState=S0&finalStates=S0,S1,S2&equations=S0,0,S0,1,S1,0,S1,1,S2,0,S2,1&matchingValues=S0,S1,S2,S0,S1,S2&inputString=100` to use the api to get the `state` and `value` for the `FSM`. 

You can also use `GET http://localhost:3000/api/mod-three?input=1011100` to run the `mod-three` example
## Tests
- Written tests for the FSM function, and coverage on all the pages 
- Main components in Mod 3 are covered in tests
# What I would add (2.0)
- Fix styling 
    - More Mobile Friendly (esp. svg rendering of states)
    - Better theme   
- Better testing (test the inputs and hooks more)
- Better Web accessibility (improved use for screen readers, remove warnings )
- Clean up ID's and components
- Seperate out the logic a bit more for creating the FSM
- Draw lines between the states on the visualizer
# Findings:

### 110111111101111011111111111111111111111101010101110000000000000000001 returning the incorrect response

`11011111110111101111111111111111111111110101010111000000000000000000` ends on `S2` which is `2`, when a `1` is added the stream the FSM stays on `S2` per the rules `110111111101111011111111111111111111111101010101110000000000000000001` ends on `S2` which is `2` however parsing the input `11011111110111101111111111111111111111110101010111000000000000000000` = `258105798244051980000` % 3 = 2, when a `1` is added we get `110111111101111011111111111111111111111101010101110000000000000000001` = `516211596488103950000` % 3 = `1`