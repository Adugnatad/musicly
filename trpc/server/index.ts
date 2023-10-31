import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { router, publicProcedure } from "./trpc";
import { z } from "zod";

export const appRouter = router({
  getUsers: publicProcedure.query(async () => {
    return { data: [{ user: 1 }, { user: 2 }] };
  }),
  getUserById: publicProcedure.input(z.number()).query(async (opt) => {
    const { input } = opt;
    const user = [{ user: 1 }, { user: 2 }].map((u) => u.user === input);
    return user;
  }),
  addUser: publicProcedure.input(z.number()).mutation(async (opt) => {
    const { input } = opt;

    return `${input} added to the database`;
  }),
});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
