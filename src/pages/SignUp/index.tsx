import FormLogin from "@/src/components/FormLogin";
import FormSignUp from "@/src/components/FormSignUp";
import Link from "next/link";

export default function SignUp() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 lg:p-24">
      <FormSignUp />
    </main>
  );
}
