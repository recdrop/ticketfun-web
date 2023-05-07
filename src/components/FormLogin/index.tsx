import Link from 'next/link';
import Image from 'next/image';
import TextOverline from '../TextoOverline/Index';
import { useState, FormEvent } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../../firebase'; // Atualize o caminho conforme necessário
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
const FormLogin = () => {
  const router = useRouter();
  
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
   const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoading(false)
      toast.success('Login efetuado com sucesso!');
      router.push('/Resume');
    } catch (err : Error | any) {

      setIsLoading(false)
      if (err instanceof Error) {
        toast.error('Erro ao efetuar o Login!');
        setError(err.message);
      } else {
        setError('Erro desconhecido');
        toast.error('Erro desconhecido!');

      }
    }
  };


  const handleGoogleSignIn = async () => {
 
    setIsLoading(true)
    const provider = new GoogleAuthProvider();

    try {
      setIsLoading(false)
      await signInWithPopup(auth, provider);
      toast.success('Login efetuado com sucesso!');
      router.push('/Resume');
   
    } catch (err: Error | any) {
      toast.error('Erro ao efetuar o Login!');
      setError(err.message);
       setIsLoading(false)
       if (err instanceof Error) {
          toast.error('Erro ao efetuar o Login!');
          setError(err.message);
        } else {
          setError('Erro desconhecido');
        }
    }
  };

  return (
    <div className="
        w-full 
        sm:w-auto 
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
        lg:px-10">
      <div className="max-w-md  w-full space-y-8">
         <div className='flex items-center justify-center'>
           <Image 
              src="/assets/imgs/logo.svg" alt="Logo"
              width={350}
              height={350}
            
           />
        </div>
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Entre na sua conta</h2>
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
                  focus:ring-purple-500 
                  focus:border-purple-500
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
              <input
                id="password"
                name="password"
                type="password"
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
                  border 
                  border-gray-200 
                  placeholder-gray-500 
                  text-gray-900 
                  focus:outline-none 
                  focus:ring-purple-500 
                  focus:border-purple-500 
                  focus:z-10 
                 "
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
              bg-purple-700 
              hover:bg-purple-800 
              focus:outline-none 
              focus:ring-2 
              focus:ring-offset-2 
              focus:ring-purple-700"
            >
              Entrar
            </button>
          </div>
          <div className='flex flex-row'>
            <div className='flex flex-1'>
              <Link href="/SignUp" className='text-purple-500 font-bold text-sm hover:text-purple-800'>
                Cadastrar-se
              </Link>
            </div>
            <div className='flex flex-1 justify-end'>
             <Link href="/ForgotPassword" className='text-purple-500 font-bold text-sm hover:text-purple-800'>
                Esqueceu a senha?
              </Link>
            </div>
          </div>
                  <div className='flex flex-row'>
            <div className='flex flex-1'>
              <Link href="/" className='  
              group 
              relative 
              w-full 
              h-14
              flex 
              justify-center 
              items-center
       
              border 
              border-purple-700
              text-lg
              font-medium 
              rounded-md 
              text-purple-700
              bg-white
              hover:bg-purple-700 hover:text-white 
              focus:outline-none 
              focus:ring-2 
              focus:ring-offset-2 
              focus:ring-purple-700"'>
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
);
};

export default FormLogin;