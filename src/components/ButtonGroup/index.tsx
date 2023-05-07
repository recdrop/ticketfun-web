import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

interface ButtonProps {
  label: string;
  active: boolean;
  icon?: string|undefined;
}

const Button: React.FC<ButtonProps> = ({ label, active, icon }) => {
  return (
    <button
      className={`flex items-center px-4  h-16 w-full md:w-auto  ${
        active
          ? 'bg-purple-700 text-white  rounded-lg'
          : 'bg-opacity-5 bg-black backdrop-blur-md text-black rounded-lg'
      }`}
    >
       {icon ==null?<FontAwesomeIcon icon={faCalendarDays} className="w-4 h-4 mr-2 gray-icons"/>: <img src={icon} alt={`${label} ícone`} className="w-4 h-4 mr-2" /> }
      {label}
    </button>
  );
};


const ButtonGroup: React.FC = () => {
  const buttons = [
    { label: 'Festas e shows', active: true ,icon: '/assets/icons/music.png'},
    { label: 'Teatros e espetáculos', active: false ,icon: '/assets/icons/theater-masks.png' },
    { label: 'Congressos e palestrar', active: false ,icon: null},
    { label: 'Gastronomia', active: false ,icon: null },
    { label: 'Cursos e wrokshops', active: false ,icon: null},
  ];

  return (
    <div className="container mx-auto -mt-6 flex flex-col md:flex-row justify-between relative z-10 space-y-4 md:space-y-0">
      {buttons.map((button, index) => (
        <Button key={index} label={button.label} active={button.active} icon={button.icon ?? undefined} />
      ))}
    </div>
  );
};

export default ButtonGroup;