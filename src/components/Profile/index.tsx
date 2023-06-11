import { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
const Profile = (): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();

      //router.push("/")
    } catch (error) {
      console.error("Erro ao realizar logout:", error);
    }
  };

  if (!user) {
    return <div>Você precisa estar logado para acessar essa página.</div>;
  }

  return (
    <div>
      <h1>Seu perfil</h1>
      <p>Nome: {user.displayName}</p>
      <p>E-mail: {user.email}</p>
      <button
        className="bg-blue-tf-700 rounded-md text-white text-lg py-3 px-6 hover:bg-blue-tf-800 transition-colors duration-300 inline-block"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
