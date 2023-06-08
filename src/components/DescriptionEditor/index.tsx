import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';


interface DescriptionEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const DescriptionEditor: React.FC<DescriptionEditorProps> = ({ value, onChange }) => {
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // Opções de formatação
      ['link', 'image', 'video'], // Opções de mídia
      [{ list: 'ordered' }, { list: 'bullet' }], // Opções de listas
      [{ align: [] }], // Opções de alinhamento
      ['clean'], // Remover formatação
    ],
  };

  const formats = [
    'bold',
    'italic',
    'underline',
    'strike',
    'link',
    'image',
    'video',
    'list',
    'bullet',
    'align',
  ];

  // Adicionar estilos personalizados ao editor
  ReactQuill.Quill.register('formats/align', Quill.import('attributors/style/align'));
  ReactQuill.Quill.register('formats/list', Quill.import('formats/list'));

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      modules={modules}
      formats={formats}
      className="description-editor"

    />
  );
};

export default DescriptionEditor;
