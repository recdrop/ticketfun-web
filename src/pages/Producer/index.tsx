import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import React from "react";

const Producer: React.FC = () => {
  // Lista de eventos de exemplo
  const events = [
    {
      id: 1,
      image: "./assets/imgs/imgCard.png",
      name: "Blackartel Festival",
      description: "Descrição do Evento 1",
      location: "Centro de Convenções - Salvador, BA",
      date: "Friday, 04/07/2023 10:00 PM",
    },
    {
      id: 2,
      image: "./assets/imgs/imgCard.png",
      name: "Blackartel Festival",
      description: "Descrição do Evento 2",
      location: "Centro de Convenções - Salvador, BA",
      date: "Friday, 04/07/2023 10:00 PM",
    },
    {
      id: 3,
      image: "./assets/imgs/imgCard.png",
      name: "Blackartel Festival",
      description: "Descrição do Evento 3",
      location: "Centro de Convenções - Salvador, BA",
      date: "Friday, 04/07/2023 10:00 PM",
    },
    // Adicione mais eventos conforme necessário
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="container mx-auto px-4 pt-8 pb-48">
        <div className="flex flex-1 justify-center mb-10">
         
          <div className="flex">
            <label className="text-2xl font-medium text-gray-600 "> Ordernar:</label>
            <select className=" ">
              <option>Data</option>
              <option>Nome</option>
            </select>
          </div>
          <div className="flex ml-2">
            <label> Filtros:</label>
            <select>
              <option>Data</option>
              <option>Nome</option>
            </select>
          </div>

        </div>

        <div className="flex flex-1">
          <div 
            className="
              flex
              w-[1278px]
              h-[449px] 
              bg-white 
              border 
              border-solid 
              border-gray-100 
              shadow-md 
              rounded-lg">
                Seu conteúdo aqui
              </div>


        </div>
       
      </main>
      <Footer />
    </div>
  );
};

export default Producer;