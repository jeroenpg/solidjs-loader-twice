import { createFileRoute } from '@tanstack/solid-router';

export const Route = createFileRoute('/view/nodots/endpoint')({
  component: () => {
    return <div>Hello, world from nodots!</div>;
  }
})
