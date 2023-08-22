import { AnyAction } from "@reduxjs/toolkit";
import {
  CREATE_DESTINATION,
  GET_DESTINATIONS,
  DELETE_DESTINATION,
  EDIT_DESTINATION,
  TOGGLE_BLOCK_DESTINATION,
} from "../Interfaces/queries";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

// Types d'actions
export const FETCH_DESTINATIONS_SUCCESS = "FETCH_DESTINATIONS_SUCCESS";
export const CREATE_DESTINATION_SUCCESS = "CREATE_DESTINATION_SUCCESS";
export const DELETE_DESTINATION_SUCCESS = "DELETE_DESTINATION_SUCCESS";
export const EDIT_DESTINATION_SUCCESS = "EDIT_DESTINATION_SUCCESS";
export const TOGGLE_BLOCK_DESTINATION_SUCCESS =
  "TOGGLE_BLOCK_DESTINATION_SUCCESS";

// Définition du type Destination.
interface Destination {
  id: string;
}

// Types des payloads pour chaque action.
interface ActionPayloads {
  [FETCH_DESTINATIONS_SUCCESS]: Destination[];
  [CREATE_DESTINATION_SUCCESS]: Destination;
  [DELETE_DESTINATION_SUCCESS]: string;
  [EDIT_DESTINATION_SUCCESS]: Destination;
  [TOGGLE_BLOCK_DESTINATION_SUCCESS]: Destination;
}

// Création d'un type pour les actions de destination basé sur les payloads définis précédemment.
type DestinationActions = {
  [Type in keyof ActionPayloads]: {
    type: Type;
    payload: ActionPayloads[Type];
  };
}[keyof ActionPayloads];
interface DestinationState {
  loading: boolean;
  data: Destination[];
}

// Action creators avec Apollo Client

export const fetchDestinations =
  (apolloClient: ApolloClient<NormalizedCacheObject>) =>
  async (dispatch: Function) => {
    try {
      const { data } = await apolloClient.query({ query: GET_DESTINATIONS });
      dispatch({
        type: FETCH_DESTINATIONS_SUCCESS,
        payload: data.destinations,
      });
    } catch (error) {
      console.error("Erreur lors de la récupération des destinations:", error);
    }
  };

export const createDestination =
  (apolloClient: ApolloClient<NormalizedCacheObject>, destinationInput: any) =>
  async (dispatch: Function) => {
    try {
      const { data } = await apolloClient.mutate({
        mutation: CREATE_DESTINATION,
        variables: destinationInput,
      });
      dispatch({
        type: CREATE_DESTINATION_SUCCESS,
        payload: data.createDestination,
      });
    } catch (error) {
      console.error("Erreur lors de la création de la destination:", error);
    }
  };

export const deleteDestination =
  (apolloClient: ApolloClient<NormalizedCacheObject>, id: string) =>
  async (dispatch: Function) => {
    try {
      await apolloClient.mutate({
        mutation: DELETE_DESTINATION,
        variables: { id },
      });
      dispatch({ type: DELETE_DESTINATION_SUCCESS, payload: id });
    } catch (error) {
      console.error("Erreur lors de la suppression de la destination:", error);
    }
  };

export const editDestination =
  (apolloClient: ApolloClient<NormalizedCacheObject>, destinationInput: any) =>
  async (dispatch: Function) => {
    try {
      const { data } = await apolloClient.mutate({
        mutation: EDIT_DESTINATION,
        variables: destinationInput,
      });
      dispatch({
        type: EDIT_DESTINATION_SUCCESS,
        payload: data.editDestination,
      });
    } catch (error) {
      console.error("Erreur lors de la modification de la destination:", error);
    }
  };

export const toggleBlockDestination =
  (apolloClient: ApolloClient<NormalizedCacheObject>, id: string) =>
  async (dispatch: Function) => {
    try {
      const { data } = await apolloClient.mutate({
        mutation: TOGGLE_BLOCK_DESTINATION,
        variables: { id },
      });
      dispatch({
        type: TOGGLE_BLOCK_DESTINATION_SUCCESS,
        payload: data.toggleBlockDestination,
      });
    } catch (error) {
      console.error(
        "Erreur lors du blocage/déblocage de la destination:",
        error
      );
    }
  };
const initialState = {
  loading: false,
  data: [],
};
// Reducer pour gérer les actions liées aux destinations.
export const destinationsReducer = (
  state: DestinationState = initialState,
  action: DestinationActions | AnyAction
) => {
  switch (action.type) {
    case FETCH_DESTINATIONS_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case CREATE_DESTINATION_SUCCESS:
      return { ...state, data: [...state.data, action.payload] };

    case DELETE_DESTINATION_SUCCESS:
      return {
        ...state,
        data: state.data.filter(
          (destination) => destination.id !== action.payload
        ),
      };
    case EDIT_DESTINATION_SUCCESS:
      return {
        ...state,
        data: state.data.map((destination) =>
          destination.id === action.payload.id ? action.payload : destination
        ),
      };

    case TOGGLE_BLOCK_DESTINATION_SUCCESS:
      return {
        ...state,
        data: state.data.map((destination) =>
          destination.id === action.payload.id ? action.payload : destination
        ),
      };
    default:
      return state;
  }
};
