import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter } from "@/trpc/server";

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
  batching: {
    enabled: true,
  },
});
