import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Destination } from "../../Interfaces/DestinationType";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import {
  fetchDestinations,
  deleteDestination,
  createDestination,
  editDestination,
  toggleBlockDestination,
} from "../../Redux/destinationsSlice";
import "./DestinationList.css";
import client from "../../apollo";
import DestinationContent from "../../components/DestinationContent/DestinationContent";
import EditDestinationDialog from "../../components/EditDestinationDialog/EditDestinationDialog";
import { CircularProgress, Button, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import theme from "../../theme";
import AddDestinationDialog from "../../components/AddDestinationDialog/AddDestinationDialog";
import ConfirmDeleteDialog from "../../components/ConfirmDeleteDialog/ConfirmDeleteDialog";

// Définition des interfaces pour le state
interface DestinationState {
  loading: boolean;
  data: Destination[];
}

interface RootState {
  destinations: DestinationState;
}

function DestinationList() {
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
  const destinations = useSelector((state: RootState) => state.destinations);

  // Gestion de l'état local
  const [selectedDestination, setSelectedDestination] =
    useState<Destination | null>(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Appeler les destinations lors du montage du composant
  useEffect(() => {
    dispatch(fetchDestinations(client));
  }, [dispatch]);

  // Handlers pour les interactions utilisateur
  const handleEditClick = (destination: Destination) => {
    setSelectedDestination(destination);
    setEditDialogOpen(true);
  };

  const handleAddClick = () => {
    setAddDialogOpen(true);
  };

  const handleDeleteClick = (destination: Destination) => {
    setSelectedDestination(destination);
    setDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedDestination && selectedDestination.id) {
      dispatch(deleteDestination(client, selectedDestination.id));
      setDialogOpen(false);
      setSelectedDestination(null);
    }
  };

  const handleEditConfirm = (newData: Destination) => {
    if (selectedDestination && selectedDestination.id) {
      dispatch(
        editDestination(client, {
          id: selectedDestination.id,
          ...newData,
        })
      );
      setEditDialogOpen(false);
      setSelectedDestination(null);
    }
  };

  const handleAddConfirm = (newData: Destination) => {
    dispatch(createDestination(client, newData));
    setAddDialogOpen(false);
  };

  const handleToggleBlock = (destination: Destination) => {
    if (destination.id) {
      dispatch(toggleBlockDestination(client, destination.id));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="destination-list-container">
        <div className="destinationListHead">
          <Typography variant="h4">Destinations</Typography>
          <Button
            sx={{ fontWeight: "600" }}
            variant="contained"
            color="primary"
            className="add-button"
            onClick={handleAddClick}
          >
            Ajouter
            <AddIcon />
          </Button>
        </div>
        <div className="destination-grid">
          <React.Fragment>
            {destinations.loading ? (
              <CircularProgress />
            ) : (
              <DestinationContent
                onToggleBlock={handleToggleBlock}
                cards={destinations.data}
                onDelete={handleDeleteClick}
                openEdit={handleEditClick}
              />
            )}
          </React.Fragment>
        </div>
      </div>

      <EditDestinationDialog
        open={editDialogOpen}
        onClose={() => setEditDialogOpen(false)}
        destination={selectedDestination}
        onEdit={handleEditConfirm}
      />

      <AddDestinationDialog
        open={addDialogOpen}
        onClose={() => setAddDialogOpen(false)}
        onAdd={handleAddConfirm}
      />
      <ConfirmDeleteDialog
        onDelete={handleDeleteConfirm}
        onClose={() => setDialogOpen(false)}
        isOpen={dialogOpen}
        selectedDestination={selectedDestination}
      />
    </ThemeProvider>
  );
}

export default DestinationList;
