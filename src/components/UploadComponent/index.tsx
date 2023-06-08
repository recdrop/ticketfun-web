import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface Accept {
  accept: string[];
}

const UploadComponent: React.FC = () => {
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setPreviewImages((prevState) => [
      ...prevState,
      ...acceptedFiles.map((file) => URL.createObjectURL(file)),
    ]);
  }, []);

  const removeImage = (imageToRemove: string) => {
    setPreviewImages((prevState) =>
      prevState.filter((image) => image !== imageToRemove)
    );
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className="w-full p-6 border-2 border-dashed rounded-md mb-4"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Arraste e solte as fotos aqui...</p>
        ) : (
          <p>Clique ou arraste e solte as fotos aqui...</p>
        )}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {previewImages.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Preview ${index}`}
              className="object-cover w-full h-64 rounded-md"
            />
            <button
              onClick={() => removeImage(image)}
              className="absolute top-0 right-0 bg-red-500 text-white rounded-bl-md p-1"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadComponent;
