import DescriptionEditor from "@/src/components/DescriptionEditor";
import Header from "@/src/components/Header";
import PlacesSearchComponent from "@/src/components/PlacesSearchComponent";
import UploadComponent from "@/src/components/UploadComponent";
import withAuth from "@/src/components/withAuth/indext";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

function NewEvent() {
  const router = useRouter();
  const { id } = router.query;
  const [description, setDescription] = useState("");

  const handleDescriptionChange = (value: string) => {
    setDescription(value);
  };

  return (
    <div className="flex flex-1 flex-col">
      <Header></Header>

      <div className="container mx-auto flex mt-5">
        {/* <MenuLateral></MenuLateral> */}

        <div className="w-full  ml-5">
          <main className="p-4 flex-1">
            <div className="flex  justify-between mb-4 pb-2 border-b-2">
              <div className="flex flex-1">
                <h1>Novo Evento</h1>
              </div>
              <div className="flex flex-1 justify-end items-center">
                <Link
                  href="/Resume"
                  className="
                flex
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
                  Voltar
                </Link>
              </div>
            </div>

            <div className="flex flex-1 flex-col bg-white rounded-md p-5">
              <div className="flex  justify-between mb-4 pb-2 border-b-2">
                <div className="flex flex-1">
                  <h2>Dados do Evento</h2>
                </div>
              </div>
              <div className="flex flex-1 flex-col">
                <div className="flex flex-1 text-base">Banner do Evento:</div>
                <div>
                  <UploadComponent />
                </div>
              </div>
              <div className="flex flex-1 flex-col mt-3">
                <div className="flex flex-1  text-base">Nome do Evento:</div>
                <div className="flex flex-1 mr-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nome do Evento"
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
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col mt-3">
                <div className="flex flex-1  text-base">
                  Descrição do Evento:
                </div>
                {/* <DescriptionEditor value={description} onChange={handleDescriptionChange} /> */}
              </div>
              {/* data inicio */}
              <div className="flex flex-1  mt-3">
                <div className="flex flex-1 flex-col mr-3">
                  <div className="flex flex-1  text-base">Data Início:</div>
                  <div>
                    <input
                      type="datetime-local"
                      name="dtBegin"
                      placeholder="Data Início do Evento"
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
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex flex-1  text-base">Data Fim:</div>
                  <div>
                    <input
                      type="datetime-local"
                      name="dtEnd"
                      placeholder="Data Fim do Evento"
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
                    />
                  </div>
                </div>
              </div>
              {/* data fim  */}
              <div className="flex flex-1 mt-3 justify-end">
                <button className="h-10 w-32 bg-red-700 mr-2 text-white font-bold rounded-md text-base uppercase">
                  Cancelar
                </button>
                <button className="h-10 w-32 bg-purple-700 text-white font-bold rounded-md text-base uppercase">
                  Salvar
                </button>
              </div>
            </div>

            <div className="flex flex-1 flex-col bg-white rounded-md p-5 mt-5">
              <div className="flex  justify-between mb-4 pb-2 border-b-2">
                <div className="flex flex-1">
                  <h2>Dados do Local do Evento</h2>
                </div>
              </div>

              <div className="flex flex-1 flex-col mt-3">
                <div className="flex flex-1  text-base">
                  Informe o endereço ou nome do local:
                </div>
                <div className="flex flex-1 mr-3">
                  <PlacesSearchComponent></PlacesSearchComponent>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default withAuth(NewEvent);
