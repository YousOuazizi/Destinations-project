import React from "react";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux"; // Ajout du Provider de Redux
import { Container } from "@mui/material";
import client from "./apollo";
import DestinationList from "./containers/DestinationList/DestinationList";
import { store } from "./Redux/store"; // Assurez-vous que vous importez votre store depuis le bon chemin

function App() {
  return (
    <ApolloProvider client={client}>
      {/* Enveloppez votre composant avec le Provider de Redux et passez votre store en prop */}
      <Provider store={store}>
        <Container>
          <DestinationList />
        </Container>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
