import { createFileRoute, useLocation } from "@tanstack/solid-router";
import { isServer } from "solid-js/web";

export const Route = createFileRoute("/")({
  component: RouteComponent,
  loader: async (routerContext) => {
    return new Promise((resolve) => setTimeout(() => {
      console.log("loading", "cause", routerContext.cause, "preload", routerContext.preload, "href", routerContext.location.href, "isServer", isServer);
      resolve(true)
    }, 1000));
  }
});

function RouteComponent() {
  const location = useLocation();
  return (
    <main>
      path: {location().pathname}
    </main>
  );
}
