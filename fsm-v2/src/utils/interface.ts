interface FSMInterface {
    id: number;
    equations: Equation[];
    states: State[]
    inputs: Input[]
}

interface Equation {
    startState: State;
    input: Input;
    endState: State;

}

interface State {
    id: string,
    name: string,
    component: React.FC
    pageUrl: string;
}
interface Input {
    id: string,
    name: string,
}

export type { FSMInterface, Equation, State, Input }