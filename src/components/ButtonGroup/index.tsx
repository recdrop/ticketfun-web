import classNames from "@/src/utils/classNames";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowLeft,
  faArrowRight,
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

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

interface ButtonProps {
  label: string;
  active: boolean;
  icon?: IconProp;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, active, icon, onClick }) => {
  return (
    <button
      className={classNames(
        active
          ? "bg-white text-blue-tf-700 rounded-lg"
          : "bg-blue-tf-100 backdrop-blur-lg text-blue-tf-700 rounded-lg",
        "flex items-center px-5 py-6 whitespace-nowrap md:w-auto mx-2"
      )}
      onClick={onClick}
    >
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          className={classNames("text-blue-tf-700", "w-8 h-8 mr-2 ")}
        />
      )}
      {label}
    </button>
  );
};

const ButtonGroup: React.FC = () => {
  const [active, setActive] = React.useState(0);
  const [buttons, setButtons] = React.useState([
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
  ]);

  const toggleActive = (idx: number) => {
    setActive(idx);

    const newButtons = buttons.map((button, index) => {
      if (index === idx) {
        return { ...button, active: true };
      } else {
        return { ...button, active: false };
      }
    });

    setButtons(newButtons);
  };

  return (
    <>
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        wrapperClassName="container mx-auto mt-8 flex flex-col md:flex-row relative z-10 space-y-4 md:space-y-0 text-xl overflow-hidden"
        scrollContainerClassName="overflow-hidden"
      >
        {buttons.map((button, index) => (
          <Button
            key={index}
            label={button.label}
            active={button.active}
            icon={button.icon ?? undefined}
            onClick={() => toggleActive(index)}
          />
        ))}
      </ScrollMenu>
    </>
  );
};

const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <button
      disabled={isFirstItemVisible}
      onClick={() => scrollPrev()}
      className={classNames(
        "absolute",
        "backdrop-blur-md text-blue-tf-700 rounded-lg",
        "flex items-center px-5 py-6 whitespace-nowrap md:w-auto",
        "z-20",
        isFirstItemVisible ? "hidden" : "block"
      )}
    >
      <FontAwesomeIcon
        icon={faArrowLeft}
        className={classNames("text-blue-tf-700", "p-1")}
      />
    </button>
  );
};

const RightArrow = () => {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <button
      disabled={isLastItemVisible}
      onClick={() => scrollNext()}
      className={classNames(
        "backdrop-blur-md text-blue-tf-700 rounded-lg",
        "flex items-center px-5 py-6 whitespace-nowrap md:w-auto",
        isLastItemVisible ? "hidden" : "block"
      )}
    >
      <FontAwesomeIcon
        icon={faArrowRight}
        className={classNames("text-blue-tf-700", "p-1")}
      />
    </button>
  );
};

export default ButtonGroup;
