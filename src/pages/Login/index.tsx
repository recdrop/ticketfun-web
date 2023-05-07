import FormLogin from "@/src/components/FormLogin";
import Link from "next/link";


export default function Login() {
  return (
     <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <FormLogin></FormLogin>
    </main>
  );
}