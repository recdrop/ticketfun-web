import Banner from "@/src/components/Banner";
import EventCard from "@/src/components/EventCard";
import Header from "@/src/components/Header";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ButtonGroup from "../components/ButtonGroup";
import Footer from "../components/Footer";
import useEventCity from "../hooks/useEventCity";
import EventCityDialog from "../components/Dialog/EventCityDialog";
import { getEventTypes } from "../services/eventTypeService";
import { EventType } from "../interfaces/eventType";
import useEventType from "../hooks/useEventType";
import EventTypeDialog from "../components/Dialog/EventTypeDialog";

const HomePage: React.FC = () => {
  // Lista de eventos de exemplo
  const events = [
    {
      id: 1,
      image: "./assets/imgs/imgCard.png",
      name: "Blackartel Festival",
      description: "Descrição do Evento 1",
      location: "Centro de Convenções - Salvador, BA",
      date: "Friday, 04/07/2023 10:00 PM",
    },
    {
      id: 2,
      image: "./assets/imgs/imgCard.png",
      name: "Blackartel Festival",
      description: "Descrição do Evento 2",
      location: "Centro de Convenções - Salvador, BA",
      date: "Friday, 04/07/2023 10:00 PM",
    },
    {
      id: 3,
      image: "./assets/imgs/imgCard.png",
      name: "Blackartel Festival",
      description: "Descrição do Evento 3",
      location: "Centro de Convenções - Salvador, BA",
      date: "Friday, 04/07/2023 10:00 PM",
    },
    // Adicione mais eventos conforme necessário
  ];

  const { eventCity, updateEventCity } = useEventCity();
  const { eventType, updateEventType } = useEventType();
  const [currentCity, setCurrentCity] = React.useState("");
  const [currentType, setCurrentType] = React.useState(eventType || 1);
  const [isDialogCityOpen, setIsDialogCityOpen] = React.useState(false);
  const [isDialogTypeOpen, setIsDialogTypeOpen] = React.useState(false);
  const [arrEventTypes, setArrEventTypes] = React.useState<Array<EventType>>(
    []
  );

  const updateCity = (city: string) => {
    updateEventCity(city);
    setCurrentCity(city);
  };

  const updateType = (id: number) => {
    console.log(id);
    const updatedEventTypes = arrEventTypes.map((evt) => {
      if (evt.id === id) {
        return { ...evt, active: true };
      } else {
        return { ...evt, active: false };
      }
    });

    setArrEventTypes(updatedEventTypes);

    updateEventType(id);
    setCurrentType(id);
  };

  const getButtonById = (id: number) => {
    return arrEventTypes?.find((evt) => evt.id === id);
  };

  React.useEffect(() => {
    if (eventCity) {
      setCurrentCity(eventCity);
    }
  }, [eventCity]);

  React.useEffect(() => {
    if (eventType) {
      setCurrentType(eventType);
    }
  }, [eventType]);

  React.useEffect(() => {
    const fetchEventType = async () => {
      const eventTypes = await getEventTypes();
      const updatedEventTypes = eventTypes.map((evt) => {
        if (evt.id === currentType) {
          return { ...evt, active: true };
        } else {
          return { ...evt, active: false };
        }
      });

      setArrEventTypes(updatedEventTypes);
      updateEventType(currentType);
    };

    fetchEventType();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Banner />
      <ButtonGroup />
      <main className="container mx-auto px-2 pt-8 pb-48">
        <EventCityDialog
          open={isDialogCityOpen}
          onClose={() => setIsDialogCityOpen(false)}
          update={updateCity}
        />

        <h2 className="text-4xl sm:text-5xl font-normal my-8 text-center">
          Popular em{" "}
          <b
            className="text-blue-tf-700 cursor-pointer items-center align-middle"
            onClick={() => setIsDialogCityOpen(true)}
          >
            {currentCity}
            <FontAwesomeIcon
              icon={faChevronDown}
              className="absolute ml-2 mt-5 text-xl text-blue-tf cursor-pointer"
            />
          </b>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard
              key={index}
              image={event.image}
              eventId={event.id}
              eventAge={16}
              eventName={event.name}
              eventDescription={event.description}
              eventLocation={event.location}
              eventDate={event.date}
            />
          ))}
        </div>

        <EventTypeDialog
          open={isDialogTypeOpen}
          onClose={() => setIsDialogTypeOpen(false)}
          update={updateType}
        />

        <h2 className="text-4xl sm:text-5xl font-normal my-8 text-center">
          Popular em{" "}
          <b
            className="text-blue-tf-700 cursor-pointer items-center align-middle"
            onClick={() => setIsDialogTypeOpen(true)}
          >
            {getButtonById(currentType) !== undefined &&
              getButtonById(currentType)?.label}
            <FontAwesomeIcon
              icon={faChevronDown}
              className="absolute ml-2 mt-5 text-xl text-blue-tf cursor-pointer"
            />
          </b>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard
              key={index}
              image={event.image}
              eventId={event.id}
              eventAge={false}
              eventName={event.name}
              eventDescription={event.description}
              eventLocation={event.location}
              eventDate={event.date}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
