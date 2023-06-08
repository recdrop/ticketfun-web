import Header from "@/src/components/Header";
import MenuLateral from "@/src/components/MenuLateral";
import Profile from "@/src/components/Profile";
import TabelaDeEventos from "@/src/components/TabelaDeEventos";
import TabelaDeEvento from "@/src/components/TabelaDeEventos";
import withAuth from "@/src/components/withAuth/indext";
import { faCalendarAlt, faPlus, faTicketAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Resume() {
  const router = useRouter();
  const { id } = router.query;


  return (
    <div className="flex flex-1 flex-col">
      <Header></Header>

      <div className="container mx-auto flex mt-5">
        
        <MenuLateral></MenuLateral>
        
        <div className="w-full  ml-5">
        
        <main className="p-4 flex-1">
          <div className="flex  justify-between mb-4 pb-2 border-b-2">
            <div className="flex flex-1">
              <h1>Meus Eventos</h1>
            </div>
            <div className="flex flex-1 justify-center sm:justify-end items-center">
              <Link href="/NewEvent" className="
                sm:flex
                hidden
                h-10 
                w-40 
                bg-green-600
                text-white
                uppercase
                font-bold
                rounded-md
                hover:bg-green-700
                justify-center
                items-center
    
                "
                >
                  Novo Evento
                </Link>
              <Link href="/NewEvent" className="
                mr-5
                sm:mr-0
                flex
                h-10 
                w-10 
                sm:hidden
                bg-green-600
                text-white
                uppercase
                font-bold
                rounded-md
                hover:bg-green-700
                justify-center
                items-center
    
                "
                >
                  <FontAwesomeIcon icon={faPlus} size='2x' />
                </Link>
            </div>
          </div>
        
          <TabelaDeEventos></TabelaDeEventos>
        </main>
      </div>


      </div>


    </div>
  );
};


export default withAuth(Resume);
