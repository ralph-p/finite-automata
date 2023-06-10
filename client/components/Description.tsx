import React from 'react'


export const Description = () => {
  return (
    <div className="w-full max-w-5xl items-center py-5">
      <p>
        Finite Automata(FA) is the simplest machine to recognize patterns. The finite automata or finite state machine is an abstract machine that has five elements or tuples.
        It has a set of states and rules for moving from one state to another but it depends upon the applied input symbol.
        Basically, it is an abstract model of a digital computer.
        <br />
        Formal specification of machine is
        <code> (Q, Σ, q, F, δ) </code>
        <br />
        In this example we are calculating Mod 3 for a string of binary inputs. Based on the notation from the definition, our modulo three FSM would be configured as follows:
      </p>
      <br />
      <ul className='list-disc pl-6 py-1'>
        <li> Q = (S0, S1, S2)</li>
        <li>Σ = (0, 1)</li>
        <li>q0 = S0</li>
        <li>F = (S0, S1, S2)</li>
        <li>δ(S0,0) = S0; δ(S0,1) = S1; δ(S1,0) = S2; δ(S1,1) = S0; δ(S2,0) = S1; δ(S2,1) = S2</li>
      </ul>
    </div>
  )
}