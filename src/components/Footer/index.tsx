import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black-footer text-gray-900 py-12 ">
      <div className="container mx-auto">
        {/* Primeira linha */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <div className="w-full  px-4 min-w-0">
            <h3 className="font-bold text-blue-tf-700 text-lg mb-2">
              ENCONTRE EVENTOS
            </h3>
            <p className="text-white mb-1 text-lg">Hoje</p>
            <p className="text-white mb-1 text-lg">Amanhã</p>
            <p className="text-white mb-1 text-lg">Esta semana</p>
            <p className="text-white mb-1 text-lg">Este fim de semana</p>
            <p className="text-white mb-1 text-lg">Próxima semana</p>
            <p className="text-white mb-1 text-lg">Este mês</p>
          </div>
          <div className="w-full  px-4 min-w-0">
            <h3 className="font-bold text-blue-tf-700  text-lg mb-2">
              CIDADES
            </h3>
            <p className="text-white mb-1 text-lg">São Paulo</p>
            <p className="text-white mb-1 text-lg">Belo Horizonte</p>
            <p className="text-white mb-1 text-lg">Rio de Janeiro</p>
            <p className="text-white mb-1 text-lg">Porto Alegre</p>
            <p className="text-white mb-1 text-lg">Brasília</p>
            <p className="text-white mb-1 text-lg">Salvador</p>
            <p className="text-white mb-1 text-lg">Curitiba</p>
            <p className="text-white mb-1 text-lg">Recife</p>
            <p className="text-white mb-1 text-lg">Florianópolis</p>
            <p className="text-white mb-1 text-lg">Campinas</p>
            <p className="text-white mb-1 text-lg">Fortaleza</p>
            <p className="text-white mb-1 text-lg">Goiânia</p>
          </div>
          <div className="w-full  px-4 min-w-0">
            <h3 className="font-bold text-blue-tf-700  text-lg mb-2">
              CATEGORIAS
            </h3>
            <p className="text-white mb-1 text-lg font-bold">Festas e shows</p>
            <p className="text-white mb-1 text-lg font-bold">
              Teatros e espetáculos
            </p>
            <p className="text-white mb-1 text-lg font-bold">
              Cursos e workshops
            </p>
            <p className="text-white mb-1 text-lg font-bold">
              Congressos e palestras
            </p>
            <p className="text-white mb-1 text-lg font-bold">Esporte</p>
            <p className="text-white mb-1 text-lg font-bold">
              Passeios e tours
            </p>
            <p className="text-white mb-1 text-lg font-bold">Gastronomia</p>
            <p className="text-white mb-1 text-lg font-bold">Grátis</p>
            <p className="text-white mb-1 text-lg font-bold">
              Saúde e Bem-Estar
            </p>
            <p className="text-white mb-1 text-lg font-bold">
              Arte, Cultura e Lazer
            </p>
            <p className="text-white mb-1 text-lg font-bold">Infantil</p>
            <p className="text-white mb-1 text-lg font-bold">
              Religião e Espiritualidade
            </p>
            <p className="text-white mb-1 text-lg font-bold">Games e Geek</p>
            <p className="text-white mb-1 text-lg font-bold">Moda e Beleza</p>
          </div>
          <div className="w-full  px-4 min-w-0">
            <h3 className="font-bold text-blue-tf-700  text-lg mb-2">
              PARA PRODUTORES
            </h3>
            <p className="text-white mb-1 text-lg font-medium">Soluções</p>
            <p className="text-white mb-1 text-lg font-medium">
              Transmissão online
            </p>
            <p className="text-white mb-1 text-lg font-medium">Cursos online</p>
            <p className="text-white mb-1 text-lg font-medium">Preço</p>
            <p className="text-white mb-1 text-lg font-medium">Integrações</p>
            <p className="text-white mb-1 text-lg font-medium">
              Cases de sucesso
            </p>
            <p className="text-white mb-1 text-lg font-medium">
              Consultor de vendas
            </p>
            <p className="text-white mb-1 text-lg font-medium">Homologados</p>
            <p className="text-white mb-1 text-lg font-medium">API</p>
          </div>
          <div className="w-full  px-4 min-w-0">
            <h3 className="font-bold text-blue-tf-700  text-lg mb-2">AJUDA</h3>
            <p className="text-white mb-1 text-lg font-bold">
              Central de Ajuda
            </p>
            <p className="text-white mb-1 text-lg font-bold">
              Compradores e Participantes
            </p>
            <p className="text-white mb-1 text-lg font-bold">
              Produtores de Eventos
            </p>
          </div>
        </div>
        {/* Segunda linha */}
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="flex flex-wrap gap-4  px-4">
            <a href="#" className="text-white hover:text-gray-500 text-lg">
              Home{" "}
            </a>
            <a href="#" className="text-white hover:text-gray-500 text-lg">
              Sobre{" "}
            </a>
            <a href="#" className="text-white hover:text-gray-500 text-lg">
              Blog{" "}
            </a>
            <a href="#" className="text-white hover:text-gray-500 text-lg">
              Carreiras{" "}
            </a>
            <a href="#" className="text-white hover:text-gray-500 text-lg">
              Termos e Políticas
            </a>
            <a href="#" className="text-white hover:text-gray-500 text-lg">
              Ética e Conduta
            </a>

            <Link href="/" className="text-xl font-bold ">
              <img src="/assets/imgs/ApplePay.png" alt="Logo" />
            </Link>

            <Link href="/" className="text-xl font-bold ">
              <img src="/assets/imgs/ccmastercard.png" alt="Logo" />
            </Link>

            <Link href="/" className="text-white hover:text-gray-500 text-lg">
              <img src="/assets/imgs/ccvisa.png" alt="Logo" />
            </Link>

            <Link href="/" className="text-white hover:text-gray-500 text-lg">
              <img src="/assets/imgs/ccamex.png" alt="Logo" />
            </Link>

            <Link href="/" className="text-white hover:text-gray-500 text-lg">
              <img src="/assets/imgs/ccdinersclub.png" alt="Logo" />
            </Link>

            <Link href="/" className="text-white hover:text-gray-500 text-lg">
              <img src="/assets/imgs/ccpaypal.png" alt="Logo" />
            </Link>
          </div>
          <div className="flex flex-col md:flex-row gap-4  md:self-center items-start px-4 pt-4">
            <Link href="/" className="text-white hover:text-gray-500 text-lg">
              <img src="/assets/imgs/InstagramSquare.png" alt="Logo" />
            </Link>
            <Link href="/" className="text-white hover:text-gray-500 text-lg">
              <img src="/assets/imgs/FacebookSquare.png" alt="Logo" />
            </Link>
          </div>
        </div>

        {/* Terceira linha */}
        <div className="flex flex-col md:flex-row justify-between items-center my-4">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold ">
              <img src="/assets/imgs/logoRodape.svg" alt="Logo" />
            </Link>
          </div>
          <div>
            <p className="text-white">
              Ticketfun Digital S.A. © Copyright 2023
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
