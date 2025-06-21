import { FSMContext } from "@/context/fsmContext";
import type { FSMInterface, State } from "@/utils/interface";
import { useState } from "react";

interface FSMControlsProps {
  fsm: FSMInterface;
  initialStateId: string;
}

const FSMControls: React.FC<FSMControlsProps> = ({ fsm, initialStateId }) => {
  const [currentState, setCurrentState] = useState<State | undefined>(
    fsm.states.find((s) => s.id === initialStateId) ?? fsm.states[0],
  );
  if (!currentState) return null;
  const availableTransitions = fsm.equations.filter(
    (eq) => eq.startState.id === currentState.id,
  );

  const handleTransition = (inputId: string) => {
    const eq = availableTransitions.find((e) => e.input.id === inputId);
    if (eq) setCurrentState(eq.endState);
  };
  const FunctionToRender = currentState.component
  return (
    <div className="max-w-screen-xs mx-auto space-y-4 p-4">
      <div className="text-xl font-bold">
        Current State: {currentState.name}
      </div>
      {availableTransitions.length > 0 ? (
        <div className="space-y-2">
          <div className="font-semibold">Available Actions:</div>
          <div className="flex flex-wrap gap-2">
            {availableTransitions.map((eq) => (
              <button
                key={eq.input.id}
                onClick={() => handleTransition(eq.input.id)}
                className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                {eq.input.name}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-gray-500 italic">
          No available transitions from this state.
        </div>
      )}
      {/* Component display */}
      <FSMContext.Provider value={{ transitionTo: handleTransition }}>
        <FunctionToRender />
      </FSMContext.Provider>
      <div className="text-sm text-gray-500">Page: {currentState.pageUrl}</div>
    </div>
  );
};

export default FSMControls;
