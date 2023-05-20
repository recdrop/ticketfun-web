import Header from "@/src/components/Header";
import MenuLateral from "@/src/components/MenuLateral";
import Profile from "@/src/components/Profile";
import TabelaDeEventos from "@/src/components/TabelaDeEventos";
import TabelaDeEvento from "@/src/components/TabelaDeEventos";
import withAuth from "@/src/components/withAuth/indext";
import { faCalendarAlt, faTicketAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            <div className="flex flex-1 justify-end items-center">
              <button className="
                h-10 
                w-40 
                bg-green-600
                text-white
                uppercase
                font-bold
                rounded-md
                hover:bg-green-700
                "
                >
                  Novo Evento
                </button>
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
