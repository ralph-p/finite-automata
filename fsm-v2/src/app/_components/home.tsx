import { useFSM } from "@/context/fsmContext";

export const HomeMain: React.FC = () => {
  const { transitionTo } = useFSM();

  return (
    <div className="p-6 space-y-4 rounded shadow bg-white">
      <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
      🏠 Home Page
        <span className="text-sm text-gray-400 font-normal">FSM Demo</span>
      </h2>

      <p className="text-gray-600 text-sm">
        Welcome to the FSM App, use the buttons in the component or the test inputs above to navigate. 
      </p>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => transitionTo("i1")}
          className="bg-green-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
        <button
          onClick={() => transitionTo("i6")}
          className="bg-green-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
         Dashboard
        </button>
      </div>
    </div>
  );
};
