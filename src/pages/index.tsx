import Banner from "@/src/components/Banner";
import EventCard from "@/src/components/EventCard";
import Header from "@/src/components/Header";
import React from "react";
import ButtonGroup from "../components/ButtonGroup";
import Footer from "../components/Footer";

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

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Banner />
      <ButtonGroup />
      <main className="container mx-auto px-4 pt-8 pb-48">
        <h2 className="text-2xl font-bold my-8 text-center">
          Próximos eventos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event, index) => (
            <EventCard
              key={index}
              image={event.image}
              eventId={event.id}
              eventName={event.name}
              eventDescription={event.description}
              eventLocation={event.location}
              eventDate={event.date}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold my-8 text-center">
          Próximos eventos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event, index) => (
            <EventCard
              key={index}
              image={event.image}
              eventId={event.id}
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
