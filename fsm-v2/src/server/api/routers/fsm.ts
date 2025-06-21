import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import type { FSMInterface } from "@/utils/interface";
import { equations, inputs, states } from "@/utils/mock_1";

// Mocked DB
const machines: FSMInterface[] = [
  {
    id: 1,
    equations,
    states,
    inputs,
  },
];

export const fsmRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `${input.text} Finite State Machine, or demo a pre built one.`,
      };
    }),

  // create: publicProcedure
  //   .input(z.object({ name: z.string().min(1) }))
  //   .mutation(async ({ input }) => {
  //     const post: FSMInterface = {
  //       id: machines.length + 1,
  //       equations: input.name,
  //     };
  //     machines.push(post);
  //     return post;
  //   }),

  getLatest: publicProcedure.query(() => {
    return machines.at(-1) ?? null;
  }),
});
