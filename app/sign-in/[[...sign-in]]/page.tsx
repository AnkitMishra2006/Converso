import { redirect } from "next/navigation";

export default function Page() {
  // No auth required — redirect to home
  redirect("/");
}
