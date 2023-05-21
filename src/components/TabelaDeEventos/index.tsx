import React from 'react'

export default function TabelaDeEvento() {
    const events = [
    { id: 1, name: 'Evento 1', value: 100 ,dateEvent:'19/05/2023 09h05m',place:'Quarto do Doug', status:'Ativo'},
    { id: 2, name: 'Evento 2', value: 200 ,dateEvent:'19/05/2023 09h05m',place:'Quarto do Doug', status:'Ativo'},
    { id: 3, name: 'Evento 3', value: 300 ,dateEvent:'19/05/2023 09h05m',place:'Quarto do Doug', status:'Ativo'},
    { id: 3, name: 'Evento 3', value: 300 ,dateEvent:'19/05/2023 09h05m',place:'Quarto do Doug', status:'Ativo'},
    { id: 3, name: 'Evento 3', value: 300 ,dateEvent:'19/05/2023 09h05m',place:'Quarto do Doug', status:'Ativo'},
    { id: 3, name: 'Evento 3', value: 300 ,dateEvent:'19/05/2023 09h05m',place:'Quarto do Doug', status:'Ativo'},
    { id: 3, name: 'Evento 3', value: 300 ,dateEvent:'19/05/2023 09h05m',place:'Quarto do Doug', status:'Ativo'},
    { id: 3, name: 'Evento 3', value: 300 ,dateEvent:'19/05/2023 09h05m',place:'Quarto do Doug', status:'Ativo'},
    { id: 3, name: 'Evento 3', value: 300 ,dateEvent:'19/05/2023 09h05m',place:'Quarto do Doug', status:'Ativo'},
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
                      <th className="
                        px-6 
                        py-3 
                        bg-purple-300
                        text-left 
                        text-sm 
                        text-gray-700 
                        uppercase 
                        tracking-wider
                        font-bold
                        ">
                        Nome do Evento
                      </th>
                      <th className="px-6 py-3 bg-purple-300 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                        Data do Evento
                      </th>
                      <th className="px-6 py-3 bg-purple-300 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                        Local do Evento
                      </th>
                      <th className="px-6 py-3 bg-purple-300 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                        Situação
                      </th>
                      <th className="px-6 py-3 bg-purple-300 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                       Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                     {events.map((event) => (           
                    <tr key={event.id} className='hover:bg-purple-100'>
                      <td className="px-6 py-4 whitespace-nowrap">
                       {event.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {event.dateEvent}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {event.place}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {event.status}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        
                      </td>
                    </tr>
                     ))}
                  </tbody>
                </table>
              </div>
          </div>
                  <div className="flex justify-center mt-4">
            
            <div className="
              flex 
              rounded-md 
              h-8 
              w-6 
              bg-purple-700 
              text-white
              justify-center
              items-center
              font-bold
              hover:bg-purple-500
              cursor-pointer
              "
              >1
              </div>
            <div className="
              flex 
              rounded-md 
              h-8 
              w-6 
              bg-purple-700 
              text-white
              justify-center
              items-center
              font-bold
              ml-2
              hover:bg-purple-500
                cursor-pointer
              "
              >2
              </div>
            <div className="
              flex 
              rounded-md 
              h-8 
              w-6 
              bg-purple-700 
              text-white
              justify-center
              items-center
              font-bold
              ml-2
              hover:bg-purple-500
                cursor-pointer
              "
              >3
              </div>
          </div>
    </>
  )
}
