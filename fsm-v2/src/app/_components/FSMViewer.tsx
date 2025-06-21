import type { FSMInterface } from "@/utils/interface";
interface FSMViewerProps {
  fsm: FSMInterface;
}
const FSMViewer: React.FC<FSMViewerProps> = ({ fsm }) => {
  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold">FSM Viewer</h2>

      <div>
        <h3 className="text-xl font-semibold">States</h3>
        <ul className="list-disc list-inside">
          {fsm.states.map((state) => (
            <li key={state.id}>
              <strong>{state.name}</strong> – <code>{state.pageUrl}</code> <span className="text-gray-500">({state.id})</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Inputs</h3>
        <ul className="list-disc list-inside">
          {fsm.inputs.map((input) => (
            <li key={input.id}>
              <strong>{input.name}</strong> <span className="text-gray-500">({input.id})</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Equations (Transitions)</h3>
        <ul className="list-disc list-inside">
          {fsm.equations.map((eq, idx) => (
            <li key={idx}>
              <code>{eq.startState.name}</code> → <code>{eq.input.name}</code> → <code>{eq.endState.name}</code>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FSMViewer