import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer"; // Assurez-vous que le chemin d'importation est correct

// Si vous avez un état initial, vous pouvez le définir ici.
const preloadedState = {};

export const store = configureStore({
  reducer: rootReducer, // Utilisez rootReducer ici
  middleware: getDefaultMiddleware({
    thunk: true,
    // vous pouvez ajouter d'autres configurations middleware ici si nécessaire
  }),
  // Pour personnaliser davantage les devtools
  devTools: process.env.NODE_ENV !== "production",
  // Ajout de l'état pré-chargé
  preloadedState: preloadedState,
  // Si vous avez des enhancers personnalisés
  // enhancers: [yourEnhancer]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
