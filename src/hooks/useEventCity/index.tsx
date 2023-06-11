import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useMemo,
} from "react";

import usePersistState from "../usePersistState";

type EventCityState = {
  eventCity: string;
  updateEventCity: (city: string) => void;
};

type EventCityProviderProps = {
  children: React.ReactNode;
};

const EventCityContext = createContext<EventCityState>({
  eventCity: "",
  updateEventCity: (city: string) => void 0,
});

export const EventCityProvider = ({ children }: EventCityProviderProps) => {
  const [eventCity, setEventCity] = usePersistState<string>(
    "event_city",
    "São Paulo"
  );

  const updateEventCity = useCallback(
    (city: string) => {
      setEventCity(city);
    },
    [setEventCity]
  );

  const state = useMemo(
    () => ({
      eventCity,
      updateEventCity,
    }),
    [eventCity, updateEventCity]
  );

  return (
    <EventCityContext.Provider value={state}>
      {children}
    </EventCityContext.Provider>
  );
};

export const useEventCity = () => useContext(EventCityContext);

export default useEventCity;
