import { createAPIFileRoute } from '@tanstack/solid-start/api';

export const APIRoute = createAPIFileRoute('/api/nodots/endpoint')({
  GET: (get) => {
    return new Response('Hello, world from nodots!')
  }
})