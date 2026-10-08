import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/Button';
import { useSeo } from '@/hooks/useSeo';

export function NotFoundPage() {
  useSeo({
    title: 'Page Not Found | Liz Palmer',
    description: 'The page you are looking for could not be found.',
  });

  return (
    <section className="container-page py-32 text-center">
      <p className="font-serif text-6xl text-teal-600">404</p>
      <h1 className="mt-4 text-3xl sm:text-4xl">Page Not Found</h1>
      <p className="mx-auto mt-4 max-w-md text-lg text-navy-600">
        We couldn’t find the page you were looking for. It may have moved or no longer exists.
      </p>
      <div className="mt-8">
        <Button to="/" icon={ArrowLeft}>
          Back to Home
        </Button>
      </div>
    </section>
  );
}
