import useEventType from "@/src/hooks/useEventType";
import { EventType } from "@/src/interfaces/eventType";
import { getEventTypes } from "@/src/services/eventTypeService";
import classNames from "@/src/utils/classNames";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowLeft,
  faArrowRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Transition } from "@headlessui/react";
import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

interface ButtonProps {
  label: string;
  active: boolean;
  icon?: IconProp;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  active,
  icon,
  onClick,
  className,
}) => {
  return (
    <button
      className={classNames(
        active
          ? "bg-white text-blue-tf-700 rounded-lg"
          : "bg-blue-tf-100 backdrop-blur-lg text-blue-tf-700 rounded-lg",
        "flex items-center px-5 py-6 whitespace-nowrap md:w-auto mx-2",
        className
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
  const { eventType, updateEventType } = useEventType();

  const refButtonMobile = React.useRef<HTMLButtonElement>(null);
  const [active, setActive] = React.useState(1);
  const [buttons, setButtons] = React.useState<Array<EventType>>([]);

  const toggleActive = (id: number) => {
    setActive(id);
    updateEventType(id);

    const newButtons = buttons?.map((button) => {
      if (button.id === id) {
        return { ...button, active: true };
      } else {
        return { ...button, active: false };
      }
    });

    setButtons(newButtons);
  };

  const scrollPrev = () => {
    const ref = refButtonMobile.current;

    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  const getButtonById = (id: number) => {
    return buttons?.find((button) => button.id === id);
  };

  React.useEffect(() => {
    const fetchEventType = async () => {
      const eventTypes = await getEventTypes();
      const updatedEventTypes = eventTypes.map((button) => {
        if (button.id === eventType) {
          return { ...button, active: true };
        } else {
          return { ...button, active: false };
        }
      });

      setButtons(updatedEventTypes);
    };

    fetchEventType();
  }, []);

  if (buttons?.length === 0) return <></>;

  return (
    <>
      <div className="block md:hidden">
        <Menu as="div" className="container mt-6 block text-xl">
          <div className="table mx-auto">
            <Menu.Button
              className={classNames(
                "bg-blue-tf-100 backdrop-blur-lg text-blue-tf-700 rounded-lg",
                "flex items-center px-5 py-6 whitespace-nowrap md:w-auto mx-2 w-full"
              )}
              ref={refButtonMobile}
            >
              {buttons && getButtonById(active)?.icon && (
                <FontAwesomeIcon
                  icon={buttons && getButtonById(active)?.icon}
                  className={classNames("text-blue-tf-700", "w-8 h-8 mr-2")}
                />
              )}
              {buttons && getButtonById(active)?.label}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="ml-2 mt-1 h-5 text-blue-tf cursor-pointer"
              />
            </Menu.Button>
          </div>

          <Transition
            as="div"
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items>
              {buttons?.map((button) => (
                <Menu.Item key={button.id}>
                  <Button
                    label={button.label}
                    active={button.active}
                    icon={button.icon ?? undefined}
                    onClick={() => {
                      toggleActive(button.id);
                      scrollPrev();
                    }}
                    className="table mx-auto m-2"
                  />
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>

      <div className="hidden md:block">
        <ScrollMenu
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
          wrapperClassName="container mx-auto mt-8 flex flex-col md:flex-row relative z-10 space-y-4 md:space-y-0 text-xl overflow-hidden"
          scrollContainerClassName="overflow-hidden"
        >
          {buttons?.map((button) => (
            <Button
              key={button.id}
              label={button.label}
              active={button.active}
              icon={button.icon ?? undefined}
              onClick={() => toggleActive(button.id)}
            />
          ))}
        </ScrollMenu>
      </div>
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
