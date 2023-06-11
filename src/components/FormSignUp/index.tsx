import { useState } from "react";
import { useRouter } from "next/router";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../firebase";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function FormSignUp() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const signUpWithEmailAndPassword = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, { displayName: name });

      // Redireciona o usuário para a página inicial após o cadastro bem-sucedido
      router.push("/Resume");
    } catch (err: Error | any) {
      console.error("Erro ao criar uma conta:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className="
      w-full 
      max-w-screen-lg 
      h-3/6 
      
      flex 
      items-center 
      justify-center 
      bg-white 
      border 
      rounded-md 
      shadow-md 
      py-12 
      px-10 
      sm:px-6 
      lg:px-10"
    >
      <div className="max-w-md  w-full space-y-8">
        <div className="flex items-center justify-center">
          <Image
            src="/assets/imgs/logo.svg"
            alt="Logo"
            width={350}
            height={350}
          />
        </div>
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Crie a sua conta
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={signUpWithEmailAndPassword}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Nome
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="
                  appearance-none 
                  rounded-md 
                  h-16 
                  relative 
                  block 
                  w-full 
                  px-3 
                  py-2 
                  border 
                  border-gray-200 
                  placeholder-gray-500 
                  text-gray-900 
                  focus:outline-none 
                  focus:ring-blue-tf-500 
                  focus:border-blue-tf-500
                  focus:z-10 "
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Endereço de e-mail
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="
                  appearance-none 
                  rounded-md 
                  h-16 
                  relative 
                  block 
                  w-full 
                  px-3 
                  py-2 
                  border 
                  border-gray-200 
                  placeholder-gray-500 
                  text-gray-900 
                  focus:outline-none 
                  focus:ring-blue-tf-500 
                  focus:border-blue-tf-500
                  focus:z-10 "
                placeholder="Endereço de e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                className="
      appearance-none 
      rounded-md 
      h-16  
      relative 
      block 
      w-full 
      px-3 
      py-2 
      pr-10 
      border 
      border-gray-200 
      placeholder-gray-500 
      text-gray-900 
      focus:outline-none 
      focus:ring-blue-tf-500 
      focus:border-blue-tf-500 
      focus:z-10 
    "
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="h-5 text-blue-tf-700 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              <div></div>
            </div>{" "}
            {/*fim da div */}
          </div>

          {error && <p className="text-red-600 text-sm mt-4">{error}</p>}

          <div>
            <button
              disabled={isLoading}
              type="submit"
              className="
              group 
              relative 
              w-full 
              h-14
              flex 
              justify-center 
              items-center
       
              border 
              border-transparent 
              text-lg
              font-medium 
              rounded-md 
              text-white 
              bg-blue-tf-700 
              hover:bg-blue-tf-800 
              focus:outline-none 
              focus:ring-2 
              focus:ring-offset-2 
              focus:ring-blue-tf-700"
            >
              Entrar
            </button>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-1">
              <Link
                href="/Login"
                className='  
              group 
              relative 
              w-full 
              h-14
              flex 
              justify-center 
              items-center
       
              border 
              border-blue-tf-700
              text-lg
              font-medium 
              rounded-md 
              text-blue-tf-700
              bg-white
              hover:bg-blue-tf-700 hover:text-white 
              focus:outline-none 
              focus:ring-2 
              focus:ring-offset-2 
              focus:ring-blue-tf-700"'
              >
                Voltar
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
