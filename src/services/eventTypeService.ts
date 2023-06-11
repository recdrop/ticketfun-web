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
import { EventType } from "../interfaces/eventType";

const eventType: EventType[] = [
  { id: 1, label: "Festas e shows", active: true, icon: faMusic },
  {
    id: 2,
    label: "Teatros e espetáculos",
    active: false,
    icon: faTheaterMasks,
  },
  {
    id: 3,
    label: "Congressos e palestras",
    active: false,
    icon: faPeopleGroup,
  },
  { id: 4, label: "Gastronomia", active: false, icon: faBowlFood },
  { id: 5, label: "Cursos e workshops", active: false, icon: faPlay },
  { id: 6, label: "Esportes", active: false, icon: faSoccerBall },
  { id: 7, label: "Cinema", active: false, icon: faFilm },
  { id: 8, label: "Infantil", active: false, icon: faChild },
];

export const getEventTypes = async () => {
  return Promise.resolve(eventType);
};
