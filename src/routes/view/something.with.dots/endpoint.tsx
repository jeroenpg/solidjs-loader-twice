import { createFileRoute } from '@tanstack/solid-router';

export const Route = createFileRoute('/view/something.with.dots/endpoint')({
  component: () => {
    return <div>Hello, world from dots!</div>;
  }
})
