// Importando bibliotecas necessárias
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

// Criação do componente UploadComponent
const UploadComponent: React.FC = () => {
  const [previewImages, setPreviewImages] = useState([]);

  // Criação da função para lidar com o upload do arquivo
  const onDrop = useCallback(acceptedFiles => {
    // Atualize o estado para incluir as novas imagens
    setPreviewImages(prevState => [
      ...prevState,
      ...acceptedFiles.map(file => URL.createObjectURL(file))
    ]);
  }, []);

  // Função para remover a imagem da pré-visualização
  const removeImage = (imageToRemove) => {
    setPreviewImages(prevState => prevState.filter(image => image !== imageToRemove));
  };

  // Utilizando o hook useDropzone
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'image/*' });

  return (
    <div className="w-full">
      <div {...getRootProps()} className="w-full p-6 border-2 border-dashed rounded-md mb-4">
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Arraste e solte as fotos aqui...</p> :
            <p>Clique ou arraste e solte as fotos aqui...</p>
        }
      </div>
      <div className="grid grid-cols-3 gap-4">
        {previewImages.map((image, index) => (
          <div key={index} className="relative">
            <img src={image} alt={`Preview ${index}`} className="object-cover w-full h-64 rounded-md" />
            <button onClick={() => removeImage(image)} className="absolute top-0 right-0 bg-red-500 text-white rounded-bl-md p-1">
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UploadComponent;
