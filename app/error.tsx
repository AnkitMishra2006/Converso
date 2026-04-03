"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Page error:", error);
  }, [error]);

  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center px-4">
      <h2 className="text-2xl font-bold">Something went wrong</h2>
      <p className="text-muted-foreground max-w-md">
        We encountered an error loading this page. This is usually a temporary
        issue — please try again.
      </p>
      <div className="flex gap-4">
        <button onClick={reset} className="btn-primary">
          Try again
        </button>
        <Link href="/" className="btn-primary">
          Go home
        </Link>
      </div>
    </main>
  );
}
