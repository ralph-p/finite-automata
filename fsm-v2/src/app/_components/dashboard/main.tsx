import { useFSM } from "@/context/fsmContext";

export const DashboardMain: React.FC = () => {
  const { transitionTo } = useFSM();

  return (
    <div className="p-6 space-y-4 rounded shadow bg-white">
      <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
        📊 Dashboard
        <span className="text-sm text-gray-400 font-normal">Main Overview</span>
      </h2>

      <p className="text-gray-600 text-sm">
        Welcome back! Choose an action to continue navigating the app.
      </p>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => transitionTo("i7")}
          className="bg-green-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Go to Profile
        </button>
        <button
          onClick={() => transitionTo("i9")}
          className="bg-green-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Go to Analytics
        </button>
        <button
          onClick={() => transitionTo("i10")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Go to Settings
        </button>

        <button
          onClick={() => transitionTo("i13")}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Logout
        </button>

        <button
          onClick={() => transitionTo("i15")}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
        >
          Back
        </button>
      </div>
    </div>
  );
};
