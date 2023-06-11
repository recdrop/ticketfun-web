import { Dispatch, SetStateAction, useEffect, useState } from "react";

type PersistState<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistState<T>(key: string, initialState: T): PersistState<T> {
  const [state, setState] = useState<T>(() => {
    if (typeof window === "undefined") return initialState;
    const item = localStorage.getItem(key);

    if (item?.length) return JSON.parse(item);

    return initialState;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistState;
