import React from "react";
import Avatar60 from "../Avatar60";

export default function TabelaDeVendedores() {
  const events = [
    {
      id: 1,
      name: "Vendedor 1",
      email: "teste@gmail.com",
      dateInsert: "19/05/2023 09h05m",
      type: "Loja Física",
      status: "Ativo",
    },
    {
      id: 2,
      name: "Vendedor 2",
      email: "teste@gmail.com",
      dateInsert: "19/05/2023 09h05m",
      type: "Promoter",
      status: "Inativo",
    },
    {
      id: 3,
      name: "Vendedor 3",
      email: "teste@gmail.com",
      dateInsert: "19/05/2023 09h05m",
      type: "Promoter",
      status: "Ativo",
    },
    {
      id: 4,
      name: "Vendedor 4",
      email: "teste@gmail.com",
      dateInsert: "19/05/2023 09h05m",
      type: "Loja Física",
      status: "Ativo",
    },
    {
      id: 5,
      name: "Vendedor 5",
      email: "teste@gmail.com",
      dateInsert: "19/05/2023 09h05m",
      type: "Promoter",
      status: "Ativo",
    },
    {
      id: 6,
      name: "Vendedor 6",
      email: "teste@gmail.com",
      dateInsert: "19/05/2023 09h05m",
      type: "Promoter",
      status: "Ativo",
    },
    {
      id: 7,
      name: "Vendedor 7",
      email: "teste@gmail.com",
      dateInsert: "19/05/2023 09h05m",
      type: "Promoter",
      status: "Ativo",
    },
    {
      id: 8,
      name: "Vendedor 8",
      email: "teste@gmail.com",
      dateInsert: "19/05/2023 09h05m",
      type: "Loja Física",
      status: "Ativo",
    },
    {
      id: 9,
      name: "Vendedor 9",
      email: "teste@gmail.com",
      dateInsert: "19/05/2023 09h05m",
      type: "Promoter",
      status: "Inativo",
    },
  ];
  // const totalEvents = events.length;
  // const totalValue = events.reduce((total, event) => total + event.value, 0);

  return (
    <>
      <div className="flex flex-1 bg-white p-4 justify-between">
        <div className="flex flex-1 items-center">
          <p>Qtd. p/ página:</p>
          <select className="h-10 w-14 text-md">
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>40</option>
            <option>50</option>
            <option>60</option>
            <option>70</option>
            <option>80</option>
            <option>90</option>
            <option>100</option>
          </select>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <div className="max-w-96 relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817-1.414 1.414-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Pesquisar eventos, shows, cursos..."
              className="w-full pl-10 pr-3 py-2 bg-white text-black rounded"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="w-full overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th
                  className="
                        px-6 
                        py-3 
                        bg-blue-tf-300
                        text-left 
                        text-sm 
                        text-gray-700 
                        uppercase 
                        tracking-wider
                        font-bold
                        "
                >
                  Vendedor
                </th>
                <th className="px-6 py-3 bg-blue-tf-300 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                  E-mail
                </th>
                <th className="px-6 py-3 bg-blue-tf-300 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                  Data Cadastro
                </th>
                <th className="px-6 py-3 bg-blue-tf-300 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                  Tipo
                </th>
                <th className="px-6 py-3 bg-blue-tf-300 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                  Situação
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {events.map((event) => (
                <tr key={event.id} className="hover:bg-blue-tf-100">
                  <td className="flex px-6 py-4 whitespace-nowrap items-center ">
                    <Avatar60
                      imageUrl="./assets/imgs/avatarDoug.jpg"
                      key={event.id}
                      altText=""
                    ></Avatar60>
                    {event.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{event.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {event.dateInsert}
                  </td>
                  <td className="px-6 py-4 font-bold whitespace-nowrap">
                    {event.type}
                  </td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap font-bold ${
                      event.status === "Ativo"
                        ? "text-green-600"
                        : event.status === "Inativo"
                        ? "text-red-600"
                        : "text-gray-600"
                    }`}
                  >
                    {event.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div
          className="
              flex 
              rounded-md 
              h-8 
              w-6 
              bg-blue-tf-700 
              text-white
              justify-center
              items-center
              font-bold
              hover:bg-blue-tf-500
              cursor-pointer
              "
        >
          1
        </div>
        <div
          className="
              flex 
              rounded-md 
              h-8 
              w-6 
              bg-blue-tf-700 
              text-white
              justify-center
              items-center
              font-bold
              ml-2
              hover:bg-blue-tf-500
                cursor-pointer
              "
        >
          2
        </div>
        <div
          className="
              flex 
              rounded-md 
              h-8 
              w-6 
              bg-blue-tf-700 
              text-white
              justify-center
              items-center
              font-bold
              ml-2
              hover:bg-blue-tf-500
                cursor-pointer
              "
        >
          3
        </div>
      </div>
    </>
  );
}
