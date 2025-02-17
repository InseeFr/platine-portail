import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/$survey")({
  beforeLoad: async () => {
    throw redirect({ to: "/" });
  },
});
