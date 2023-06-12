import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog } from "@headlessui/react";
import classNames from "@/src/utils/classNames";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { DialogProps } from ".";

export default function EventCityDialog({
  open,
  onClose,
  update: updateCity,
  className,
}: DialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className={classNames("relative z-50", className)}
    >
      <div
        className="fixed inset-0 bg-white/70 backdrop-blur-md"
        aria-hidden="true"
      />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-lg shadow-lg p-6">
          <Dialog.Title className="mb-4 flex justify-between">
            <a className="text-2xl font-bold text-gray-800">
              Selecionar cidade
            </a>

            <button
              className="ml-4 text-gray-600 hover:text-gray-800 focus:outline-none"
              onClick={onClose}
            >
              <FontAwesomeIcon
                icon={faClose}
                className={classNames("text-2xl")}
              />
            </button>
          </Dialog.Title>

          <div className="py-4 block w-full">
            <select
              className="border-0 cursor-pointer rounded drop-shadow-md bg-blue-200 w-72 duration-300 hover:bg-blue-400 focus:bg-gray-300 p-4"
              onChange={(e) => (updateCity ? updateCity(e.target.value) : null)}
              defaultValue="Selecionar Cidade"
            >
              <option disabled>Selecionar Cidade</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
              <option value="Belo Horizonte">Belo Horizonte</option>
              <option value="Curitiba">Curitiba</option>
              <option value="Salvador">Salvador</option>
            </select>
          </div>

          <div className="text-right">
            <button
              className="border 
              border-black 
              border-opacity-20 
              backdrop-filter 
              backdrop-blur-lg 
              rounded-l-xl 
              px-4 py-2
              text-white
              bg-blue-tf-700 
              hover:bg-blue-tf-800
              hover:text-white
              text-md"
              onClick={onClose}
            >
              Selecionar
            </button>

            <button
              className="border 
            border-black 
            border-opacity-20 
            backdrop-filter 
            backdrop-blur-lg 
            rounded-r-xl 
            px-4 py-2
            text-white
            bg-gray-700 
            hover:bg-gray-800
            hover:text-white
            text-md"
              onClick={onClose}
            >
              Cancelar
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
