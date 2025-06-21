"use client";

import { useState } from "react";

import { api } from "@/trpc/react";
import FSMControls from "./FSMControls";
import FSMViewer from "./FSMViewer";


export function LatestPost() {
  const [latestMachine] = api.fsmRouter.getLatest.useSuspenseQuery();

  const utils = api.useUtils();
  const [name, setName] = useState("");
  // const createPost = api.fsmRouter.create.useMutation({
  //   onSuccess: async () => {
  //     await utils.fsmRouter.invalidate();
  //     setName("");
  //   },
  // });

  return (
    <div className="w-full max-w-screen-xl">
      {latestMachine ? (
        <div className="w-full row gap-3 justify-center flex">

        <FSMControls fsm={latestMachine} initialStateId="s1"/>
        <FSMViewer fsm={latestMachine} />
        </div>
      ) : (
        <p>You have no machine yet.</p>
      )}
      
    </div>
  );
}
