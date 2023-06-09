import Link from "next/link";
import Image from "next/image";
import TextOverline from "../TextoOverline/Index";
import { useState, FormEvent } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../../firebase"; // Atualize o caminho conforme necessário
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const FormLogin = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoading(false);
      toast.success("Login efetuado com sucesso!");
      router.push("/Resume");
    } catch (err: Error | any) {
      setIsLoading(false);
      if (err instanceof Error) {
        toast.error("Erro ao efetuar o Login!");
        setError(err.message);
      } else {
        setError("Erro desconhecido");
        toast.error("Erro desconhecido!");
      }
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();

    try {
      setIsLoading(false);
      await signInWithPopup(auth, provider);
      toast.success("Login efetuado com sucesso!");
      router.push("/Resume");
    } catch (err: Error | any) {
      toast.error("Erro ao efetuar o Login!");
      setError(err.message);
      setIsLoading(false);
      if (err instanceof Error) {
        toast.error("Erro ao efetuar o Login!");
        setError(err.message);
      } else {
        setError("Erro desconhecido");
      }
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 lg:p-24">
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
      px-6
      sm:px-6 
      lg:px-6"
      >
        <div className="max-w-md w-full space-y-8">
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
              Entre na sua conta
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm space-y-4">
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
              <div>
                <label htmlFor="password" className="sr-only">
                  Senha
                </label>
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
                </div>
              </div>
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
                  href="/SignUp"
                  className="text-blue-tf-500 font-bold text-sm hover:text-blue-tf-800"
                >
                  Cadastrar-se
                </Link>
              </div>
              <div className="flex flex-1 justify-end">
                <Link
                  href="/ForgotPassword"
                  className="text-blue-tf-500 font-bold text-sm hover:text-blue-tf-800"
                >
                  Esqueceu a senha?
                </Link>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-1">
                <Link
                  href="/"
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
          <TextOverline texto="ou acesse com " />
          <div className="mt-4 flex items-center justify-between">
            <button
              disabled={isLoading}
              onClick={handleGoogleSignIn}
              className="
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
              bg-red-600 
              hover:bg-red-700 
              focus:outline-none 
              focus:ring-2 
              focus:ring-offset-2 
              focus:ring-red-500"
            >
              Entrar com Google
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FormLogin;
