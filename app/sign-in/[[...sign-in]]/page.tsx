import { SignIn } from "@clerk/nextjs";

function Page() {
  return (
    <main className="flex items-center justify-center">
      <SignIn />
    </main>
  );
}

export default Page;
