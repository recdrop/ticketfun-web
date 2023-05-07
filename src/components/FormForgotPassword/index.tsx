import Link from 'next/link';
import Image from 'next/image';
import { useState, FormEvent } from 'react';
import { auth } from '../../../firebase'; // Atualize o caminho conforme necessário
import { useRouter } from 'next/router';
import { sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';

const FormForgotPassword = () => {
  const router = useRouter();
  
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

 const handleResetPassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    try {
      await sendPasswordResetEmail(auth, email);
      setIsSuccess(true);
      toast.success("E-mail de reset enviado com sucesso!")
      setEmail("");
    } catch (err : Error | any) {
      setError(err.message);
      toast.error("O correu um erro ao resetar a senha!"+err.message)
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
          <h2 className="
            mt-6 
            text-center 
            text-3xl 
            font-extrabold 
            text-gray-900"
          >
            Resetar Senha
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleResetPassword}>
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
         
          </div>

          {error && <p className="text-red-600 text-sm mt-4">{error}</p>}

          <div>
            <button
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
              Enviar
            </button>
          </div>
           <div className='flex flex-row'>
            <div className='flex flex-1'>
              <Link href="/Login" className='  
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
      </div>
</div>
);
};

export default FormForgotPassword;