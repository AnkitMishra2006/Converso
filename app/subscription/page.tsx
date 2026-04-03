import Link from "next/link";
import React from "react";

function page() {
  return (
    <main className="flex flex-col items-center justify-center gap-8 py-16 px-4 text-center">
      <div className="cta-badge">Pricing</div>
      <h1 className="text-4xl font-bold">Simple, Transparent Pricing</h1>
      <p className="text-muted-foreground max-w-xl">
        Converso is free to use for everyone. Build companions, start sessions,
        and learn at your own pace — no credit card required.
      </p>
      <div className="flex gap-6 max-sm:flex-col">
        <div className="border border-black rounded-xl p-8 flex flex-col gap-4 w-72">
          <h2 className="text-2xl font-bold">Free</h2>
          <p className="text-4xl font-bold">
            $0<span className="text-base font-normal">/mo</span>
          </p>
          <ul className="text-left flex flex-col gap-2 text-sm">
            <li>✓ Unlimited AI sessions</li>
            <li>✓ Create companions</li>
            <li>✓ All subjects</li>
            <li>✓ Bookmarks &amp; history</li>
          </ul>
          <Link href="/companions" className="btn-primary justify-center">
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}

export default page;
