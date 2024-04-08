// AppStateContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Weather, City, Forecast } from './Types';

interface AppState {
  weather: Weather | null;
  cities: City[];
  forecast: Forecast[];
}

const initialState: AppState = {
  weather: null,
  cities: [],
  forecast: [],
};

interface AppStateContextProps {
  children: ReactNode;
}

const AppStateContext = createContext<AppState | undefined>(initialState);

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};

export const AppStateProvider: React.FC<AppStateContextProps> = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <AppStateContext.Provider value={state}>
      {children}
    </AppStateContext.Provider>
  );
};
