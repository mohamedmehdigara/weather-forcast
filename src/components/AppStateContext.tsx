// AppStateContext.tsx
import React, { createContext, useContext, useState } from 'react';
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

const AppStateContext = createContext<AppState | undefined>(undefined);

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};

export const AppStateProvider: React.FC = ({  }) => {
  const [state, setState] = useState(initialState);

  return (
    <AppStateContext.Provider value={state}>
      {}
    </AppStateContext.Provider>
  );
};
 export default {AppStateContext};