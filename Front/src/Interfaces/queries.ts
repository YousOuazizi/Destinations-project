import { gql } from "@apollo/client";

export const CREATE_DESTINATION = gql`
  mutation CreateDestination(
    $name: String!
    $address: String!
    $image: String!
    $habitant: String!
    $hotel: String!
    $revenue: String!
    $superficie: String!
  ) {
    createDestination(
      name: $name
      address: $address
      image: $image
      habitant: $habitant
      hotel: $hotel
      revenue: $revenue
      superficie: $superficie
    ) {
      id
      name
      address
      image
      habitant
      hotel
      revenue
      superficie
      isBlocked
    }
  }
`;

export const GET_DESTINATIONS = gql`
  query GetDestinations {
    destinations {
      id
      name
      address
      image
      habitant
      hotel
      revenue
      superficie
      isBlocked
    }
  }
`;

export const DELETE_DESTINATION = gql`
  mutation DeleteDestination($id: String!) {
    deleteDestination(id: $id)
  }
`;

export const EDIT_DESTINATION = gql`
  mutation EditDestination(
    $id: String!
    $name: String!
    $address: String!
    $image: String!
    $habitant: String!
    $hotel: String!
    $revenue: String!
    $superficie: String!
    $isBlocked: Boolean!
  ) {
    editDestination(
      id: $id
      name: $name
      address: $address
      image: $image
      habitant: $habitant
      hotel: $hotel
      revenue: $revenue
      superficie: $superficie
      isBlocked: $isBlocked
    ) {
      id
      name
      address
      image
      habitant
      hotel
      revenue
      superficie
      isBlocked
    }
  }
`;

export const TOGGLE_BLOCK_DESTINATION = gql`
  mutation ToggleBlockDestination($id: String!) {
    toggleBlockDestination(id: $id) {
      id
      name
      address
      image
      habitant
      hotel
      revenue
      superficie
      isBlocked
    }
  }
`;
