import { useQuery, useMutation } from "@apollo/client";
import {
  GET_DESTINATIONS,
  DELETE_DESTINATION,
  EDIT_DESTINATION,
  CREATE_DESTINATION,
  TOGGLE_BLOCK_DESTINATION,
} from "../Interfaces/queries";

export function useDestinations() {
  return useQuery(GET_DESTINATIONS);
}

export function useToggleBlockDestination() {
  return useMutation(TOGGLE_BLOCK_DESTINATION);
}

export function useDeleteDestination() {
  return useMutation(DELETE_DESTINATION);
}

export function useEditDestination() {
  return useMutation(EDIT_DESTINATION);
}

export function useCreateDestination() {
  return useMutation(CREATE_DESTINATION);
}
