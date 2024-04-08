// AppStateContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { Weather, City, Forecast } from './types';

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

const AppStateContext = createContext<AppState | undefined>(initialState);

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};

export const AppStateProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <AppStateContext.Provider value={state}>
      {children}
    </AppStateContext.Provider>
  );
};
