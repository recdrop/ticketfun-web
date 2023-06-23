import EventListItemProducer from "@/src/components/EventListItemProducer";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <div className="flex flex-1 justify-center mb-10 flex-wrap">
          <div className="flex">
            <label className="text-2xl font-medium text-gray-600 ">
              {" "}
              Ordernar:
            </label>
            <select className=" ">
              <option>Data</option>
              <option>Nome</option>
            </select>
          </div>
          <div className="flex ml-2">
            <label className="text-2xl font-medium text-gray-00 mr-2 ">
              Filtros
            </label>
            <FontAwesomeIcon
              icon={faFilter}
              className="text-gray-600 text-3xl cursor-pointer"
            />
          </div>
        </div>

        <div className="flex flex-1 ">
          <div
            className="
              flex
              flex-col
              w-[1278px]
              min-h-[449px] 
              bg-white 
              border 
              border-solid 
              border-gray-100 
              shadow-md 
              rounded-lg"
          >
            <div>
              <img
                src="./assets/imgs/imgCardEvents.png"
                alt={"exemplo"}
                className="w-full  "
              />
            </div>
            {/* informacoes basicas do evento */}
            <div className="p-6 flex flex-col">
              <div className="text-blue-700 font-inter font-bold text-base">
                Friday, 04/07/2023 10:00 PM
              </div>
              <div
                className="
                flex 
                flex-1 
               font-inter 
               text-[32px] 
               text-gray-tf-500
               font-medium
               
               "
              >
                Blackartel Festival
              </div>
              <div className="flex flex-1 font-inter text-base text-gray-tf-600">
                Centro de Convenções - Salvador, BA
              </div>
              <div className="flex">
                <button
                  className="
                  mt-4
                  flex 
                  flex-1 
                  bg-blue-tf-700 
                  h-[67px]
                  rounded-xl
                  border 
                  border-solid 
                  border-gray-300
                  justify-center
                  items-center
                  font-inter
                  text-xl
                  text-white
                  font-medium
                  flex-wrap
                  "
                >
                  Editar Evento
                </button>
              </div>
            </div>
            {/* estatisticas do evento e ingressos */}
            <div className="p-6">
              {/* ingressos vendidos numero */}
              <div className="mb-2 p-7 rounded-lg border  border-opacity-10">
                <div
                  className="
                  sm:text-3xl
                  text-4xl 
                  font-inter 
                  font-medium
                  text-gray-tf-500
                  
                  "
                >
                  916
                </div>
                <div
                  className="text-base
                  font-inter 
                  font-medium
                  text-gray-tf-600"
                >
                  Ingressos vendidos
                </div>
              </div>
              {/* Aguardando pagamento */}
              <div
                className="
                  mb-2 
                  p-7 
                  rounded-lg 
                  border  
                  border-opacity-10"
              >
                <div
                  className="
                   text-3xl
                  sm:text-4xl 
                  font-inter 
                  font-medium
                  text-gray-tf-500
                  
                  "
                >
                  175
                </div>
                <div
                  className="text-base
                  font-inter 
                  font-medium
                  text-gray-tf-600"
                >
                  Aguardando pagamento
                </div>
              </div>
              {/* Receita Liquida*/}
              <div
                className="

                  p-7 
                  rounded-lg 
                  border  
                  border-opacity-10"
              >
                <div
                  className="
                  text-3xl
                  sm:text-4xl 
                  font-inter 
                  font-medium
                  text-gray-tf-500
                  
                  "
                >
                  R$ 230.000,00
                </div>
                <div
                  className="
                  text-base
                  font-inter 
                  font-medium
                  text-gray-tf-600"
                >
                  Receita líquida Já abatido taxas e impostos
                </div>
              </div>
            </div>
          </div>
          {/* <EventListItemProducer /> */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Producer;
