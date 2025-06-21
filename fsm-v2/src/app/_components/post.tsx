"use client";

import FSMControls from "./FSMControls";
import { equations, inputs, states } from "@/utils/mock_1";
import type { FSMInterface } from "@/utils/interface";
import FSMViewer from "./FSMViewer";

const machines: FSMInterface = 
  {
    id: 1,
    equations,
    states,
    inputs,
  }

export function LatestPost() {
  return (
    <div className="w-full max-w-screen-xl flex flex-col sm:flex-row">
      <FSMControls fsm={machines} initialStateId="s1"/>
      <FSMViewer fsm={machines} />
    </div>
  );
}
