import { faCalendarAlt, faTicketAlt, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function MenuLateral() {
  const router = useRouter();

  const isCurrentPage = (path: string) => {
    return router.pathname === path;
  };

  return (
    <div className="w-96 flex flex-col items-center h-px-1200 bg-white ">
      {/* Menu lateral */}
      <div className="w-full mt-4 rounded-sm shadow-sm">
        <Link
          href='/Resume'
          className={`hover:bg-purple-200 hover:text-purple-700 font-bold text-base hover:border-l-4 hover:border-l-purple-800 h-16 flex items-center px-6 cursor-pointer ${isCurrentPage('/Resume') ? 'text-purple-700 border-l-4 border-l-purple-800' : ''}`}
        >
          <FontAwesomeIcon icon={faCalendarAlt} className={`mr-2 ${isCurrentPage('/Resume') ? 'text-purple-700':'text-gray-500' }`} />
          Meus Eventos
        </Link>
        <div
          className={`hover:bg-purple-200 hover:text-purple-700 font-bold text-base hover:border-l-4 hover:border-l-purple-800 h-16 flex items-center px-6 cursor-pointer ${isCurrentPage('/tickets') ? 'text-purple-700 border-l-4 border-l-purple-800' : ''}`}
        >
          <FontAwesomeIcon icon={faTicketAlt} className={`mr-2 ${isCurrentPage('/tickets') ? 'text-purple-700':'text-gray-500' }`} />
          Meus Ingressos
        </div>
        <Link
          href="/Sales"
          className={`hover:bg-purple-200 hover:text-purple-700 font-bold text-base hover:border-l-4 hover:border-l-purple-800 h-16 flex items-center px-6 cursor-pointer ${isCurrentPage('/Sales') ? 'text-purple-700 border-l-4 border-l-purple-800' : ''}`}
        >
     
            <FontAwesomeIcon icon={faMoneyBillAlt} className={`mr-2 ${isCurrentPage('/Sales') ? 'text-purple-700':'text-gray-500' }`} />
            Vendedores

        </Link>
      </div>
    </div>
  )
}
