export type FAProps = {
    allStates: Set<string>;
    inputSymbols: Set<string>;
    initialState?: string;
    finalStates: Set<string>;
    equations: [string, string][];
    matchingValues: string[];
    inputString?: string
  }