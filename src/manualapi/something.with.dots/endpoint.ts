import { createAPIFileRoute } from '@tanstack/solid-start/api';

export const APIRoute = createAPIFileRoute('/api/so2332mething.with.dots/endpoint')({
  GET: async (get) => {
    return new Response('Hello, world from dots!')
  }
})