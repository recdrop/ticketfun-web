import classNames from "@/src/utils/classNames";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faBowlFood,
  faChild,
  faFilm,
  faMusic,
  faPeopleGroup,
  faPlay,
  faSoccerBall,
  faTheaterMasks,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface ButtonProps {
  label: string;
  active: boolean;
  icon?: IconProp;
}

const Button: React.FC<ButtonProps> = ({ label, active, icon }) => {
  return (
    <button
      className={classNames(
        active
          ? "bg-purple-700 text-white rounded-lg"
          : "bg-opacity-5 bg-black backdrop-blur-lg text-black rounded-lg",
        "flex items-center px-5 py-6 whitespace-nowrap md:w-auto mx-2"
      )}
    >
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          className={classNames(
            active ? "text-white" : "text-gray-tf-900",
            "w-8 h-8 mr-2 "
          )}
        />
      )}
      {label}
    </button>
  );
};

const ButtonGroup: React.FC = () => {
  const buttons = [
    { label: "Festas e shows", active: true, icon: faMusic },
    {
      label: "Teatros e espetáculos",
      active: false,
      icon: faTheaterMasks,
    },
    { label: "Congressos e palestras", active: false, icon: faPeopleGroup },
    { label: "Gastronomia", active: false, icon: faBowlFood },
    { label: "Cursos e workshops", active: false, icon: faPlay },
    { label: "Esportes", active: false, icon: faSoccerBall },
    { label: "Cinema", active: false, icon: faFilm },
    { label: "Infantil", active: false, icon: faChild },
  ];

  return (
    <div className="container mx-auto -mt-6 flex flex-col md:flex-row justify-between relative z-10 space-y-4 md:space-y-0 text-xl">
      {buttons.map((button, index) => (
        <Button
          key={index}
          label={button.label}
          active={button.active}
          icon={button.icon ?? undefined}
        />
      ))}
    </div>
  );
};

export default ButtonGroup;
