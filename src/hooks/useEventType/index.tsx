import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useMemo,
} from "react";

import usePersistState from "../usePersistState";

type EventTypeState = {
  eventType: number;
  updateEventType: (type: number) => void;
};

type EventTypeProviderProps = {
  children: React.ReactNode;
};

const EventTypeContext = createContext<EventTypeState>({
  eventType: 1,
  updateEventType: (type: number) => void 0,
});

export const EventTypeProvider: FC = ({ children }: EventTypeProviderProps) => {
  const [eventType, setEventType] = usePersistState<number>("event_type", 1);

  const updateEventType = useCallback(
    (type: number) => {
      setEventType(type);
    },
    [setEventType]
  );

  const state = useMemo(
    () => ({
      eventType,
      updateEventType,
    }),
    [eventType, updateEventType]
  );

  return (
    <EventTypeContext.Provider value={state}>
      {children}
    </EventTypeContext.Provider>
  );
};

export const useEventType = () => useContext(EventTypeContext);

export default useEventType;
