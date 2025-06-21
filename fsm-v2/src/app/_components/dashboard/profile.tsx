import { useFSM } from "@/context/fsmContext";

export const DashboardProfile: React.FC = () => {
  const { transitionTo } = useFSM();
  return (
    <div className="p-6 space-y-4 rounded shadow bg-white">
      <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
      👤 Profile

      </h2>
      <input className="block border mt-2 px-2 py-1" placeholder="Name" defaultValue="John Doe" />
      <input className="block border mt-2 px-2 py-1" placeholder="Email" defaultValue="john@example.com" />
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => transitionTo("i8")}
          className="bg-green-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Go to Profile Info
        </button>

        <button
          onClick={() => transitionTo("i13")}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Logout
        </button>

        <button
          onClick={() => transitionTo("i14")}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
        >
          Back
        </button>

        <button
          onClick={() => transitionTo("i15")}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};
