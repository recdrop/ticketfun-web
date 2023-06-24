import { faLink, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function EventListItemProducer() {
  return (
    <div
      className="
          flex
          flex-col
          lg:flex-row
          flex-1
          min-h-[449px] 
        bg-white 
          border 
          border-solid 
          border-gray-100 
          shadow-md 
          rounded-lg
          mb-12
          transform 
          transition-transform 
          duration-300 
          hover:scale-105
              "
    >
      {EventComponentProducer()}
      {/* componente informações */}
      {EventDataComponentProducer()}
    </div>
  );
}

function EventDataComponentProducer() {
  return (
    <div
      className="
                  flex 
                  flex-1 
                  flex-col 
                  justify-between   
                  p-7 
                "
    >
      <div
        className="
                  flex 
                  flex-col 
                  md:flex-row
                  flex-wrap 
                  w-full 
                  min-h-[159px] 
                  mb-6"
      >
        {/* count dash */}
        <div
          className="
                        flex
                        h-[159px]  
                        w-[166px]
                        bg-white 
                        border 
                        border-solid 
                        border-gray-100 
                        rounded-11
                        flex-col
                        p-7
                        mr-7
                        "
        >
          <div
            className="
                          
                           font-medium 
                           text-[40px] 
                           leading-[160%] 
                           text-gray-700"
          >
            916
          </div>
          <div
            className="
                           font-normal 
                           text-base 
                           leading-5 
                           text-gray-400
                           break-words
                           "
          >
            Ingressos vendidos
          </div>
        </div>
        {/* count dash */}
        <div
          className="
                        flex
                        w-[193px]
                        h-[159px]  
                        bg-white 
                        border 
                        border-solid 
                        border-gray-100 
                        rounded-11
                        flex-col
                        p-7
                        mr-7
                        "
        >
          <div
            className="
                           font-medium 
                           text-[40px] 
                           leading-[160%] 
                           text-gray-700"
          >
            175
          </div>
          <div
            className="
                           font-normal 
                           text-base 
                           leading-5 
                           text-gray-400
                             break-words
                           "
          >
            Aguardando pagamento
          </div>
        </div>
        {/* count dash */}
        <div
          className="
                        flex
                        p-7
                        w-[421px]
                        h-[159px]  
                        bg-white 
                        border 
                        border-solid 
                        border-gray-100 
                        rounded-11
                        flex-col
                        flex-wrap
                        "
        >
          <div
            className="
                           font-medium 
                           text-[40px] 
                           leading-[160%] 
                           text-gray-700
                             break-words
                           "
          >
            R$230.000,00
          </div>
          <div
            className="
                           font-normal 
                           text-base 
                           leading-5 
                           text-gray-400
                             break-words
                           "
          >
            Receita Líquida Já abatido taxas e impostos
          </div>
        </div>
      </div>

      <div
        className="
                  flex  
                  flex-col
                  flex-wrap
                  sm:flex-row
                  mb-6 
                  w-full 
                  min-h-[48px]
                  border 
                  border-solid 
                  border-gray-100 
                  rounded-11"
      >
        <div
          className="
                        h-full 
                        w-[79px] 
                        flex 
                        items-center 
                        justify-center
                        border-r 
                        border-solid 
                        border-gray-100
                        "
        >
          <FontAwesomeIcon
            icon={faLink}
            className="text-blue-tf-400 text-lg cursor-pointer"
          />
        </div>
        <div
          className="
                        flex 
                        flex-1
                        items-center 
                        px-6
                        font-normal 
                        text-base 
                        leading-5 
                        text-gray-600
                        "
        >
          https://www.ticketfun.com.br/evento/blackartel-festival-salv
        </div>
      </div>
      {/* botoes */}
      <div className="flex flex-col lg:flex-row flex-1 flex-wrap">
        <Link
          href={`/Events/1`}
          className="
                                  flex
                          
                                  justify-center
                                  items-center
                                  border 
                                  border-black 
                                  border-opacity-20 
                                  backdrop-filter 
                                  backdrop-blur-lg 
                                  rounded-xl 
                                  h-[67px]
                                  w-[362px]
                                  text-white
                                  bg-blue-tf-700 
                                  hover:bg-blue-tf-800
                                  hover:text-white
                                  text-xl
                                  mr-[18px]
                                  mb-2
                                  "
        >
          Gerar ingresso cortesia
        </Link>
        <Link
          href={`/Events/1`}
          className="
                                  flex
                                  mr-[18px]
                                  justify-center
                                  items-center
                                  rounded-xl 
                                  h-[67px]
                                  w-[313px]
                                  text-white
                                  hover:text-white
                                  text-xl
                                  bg-yellow-600 
                                  hover:bg-yellow-800 
                                  border 
                                  border-solid 
                                  border-gray-500 
                                  border-opacity-20 
                                  backdrop-filter 
                                  backdrop-blur-2xl 
                                  rounded-11
                                  mb-2
                                  "
        >
          Pausar Venda de Ingressos
        </Link>
        <Link
          href={`/Events/1`}
          className="
                                  flex
                    
                                  justify-center
                                  items-center
                                  border 
                                  border-black 
                                  border-opacity-20 
                                  backdrop-filter 
                                  backdrop-blur-lg 
                                  rounded-md
                                  h-[67px]
                                  w-[67px]
                                  text-white
                                  bg-red-600
                                  hover:bg-red-800
                                  hover:text-white
                                  text-xl
                                  "
        >
          <FontAwesomeIcon
            icon={faTrash}
            className="
                                text-white 
                                tf-400 
                                text-[20px] 
                                cursor-pointer
                            
                                "
          />
        </Link>
      </div>
    </div>
  );
}

function EventComponentProducer() {
  return (
    <div
      className="
                    w-full
                    lg:w-[409px] 
                    h-full 
                    border-r 
                    border-solid 
                    border-black 
                    border-opacity-10
                    "
    >
      <div
        className="
                      w-full
                      lg:w-[409px] 
                      lg:h-[232px]"
      >
        <img
          src="./assets/imgs/fotoExemplo.png"
          alt={"exemplo"}
          className="w-full object-cover mb-4 rounded-t-md"
        />
      </div>
      <div className="px-6 py-5">
        <h3 className="not-italic font-bold text-base leading-5 text-blue-tf-700">
          Friday, 04/07/2023 10:00 PM
        </h3>
        <h1 className="text-[32px] font-medium">Blackartel Festival</h1>
        {/* <p className="description ">{eventDescription}</p> */}
        <p className="not-italic font-normal text-base leading-5 text-gray-600">
          Centro de Convenções - Salvador, BA
        </p>
        <div className="flex flex-row mt-5">
          <div className="flex flex-1">
            <Link
              href={`/Events/1`}
              className="
                                  flex
                                  flex-1
                                  justify-center
                                  items-center
                                  border 
                                  border-black 
                                  border-opacity-20 
                                  backdrop-filter 
                                  backdrop-blur-lg 
                                  rounded-xl 
                                  h-[67px]
                                  text-white
                                  bg-blue-tf-700 
                                  hover:bg-blue-tf-800
                                  hover:text-white
                                  text-xl
                                  "
            >
              Buy Tickets
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
