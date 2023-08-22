import React, { useState } from "react";
import theme from "../../theme";
import {
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  Input,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import "./DestinationForm.css";
import { Destination } from "../../Interfaces/DestinationType";

interface DestinationFormProps {
  onClose: () => void;
  destination: Destination | null;
  onSubmit: (editedData: Destination) => void;
  isEditMode: boolean;
}

function DestinationForm({
  onClose,
  destination,
  onSubmit,
  isEditMode,
}: DestinationFormProps) {
  const [editedData, setEditedData] = useState<Destination>({
    name: isEditMode && destination ? destination.name : "",
    address: isEditMode && destination ? destination.address : "",
    image: isEditMode && destination ? destination.image : "",
    habitant: isEditMode && destination ? destination.habitant : "",
    hotel: isEditMode && destination ? destination.hotel : "",
    revenue: isEditMode && destination ? destination.revenue : "",
    superficie: isEditMode && destination ? destination.superficie : "",
    isBlocked: isEditMode && destination ? destination.isBlocked : false,
  });

  const handleFieldChange = (
    fieldName: keyof typeof editedData,
    value: string | boolean
  ) => {
    setEditedData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleEditConfirm = () => {
    onSubmit(editedData);
  };

  return (
    <ThemeProvider theme={theme}>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="destination-name">Name</InputLabel>
        <Input
          id="destination-name"
          value={editedData.name}
          onChange={(e) => handleFieldChange("name", e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="destination-address">Address</InputLabel>
        <Input
          id="destination-address"
          value={editedData.address}
          onChange={(e) => handleFieldChange("address", e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="destination-image">Lien de l'image</InputLabel>
        <Input
          id="destination-image"
          value={editedData.image}
          onChange={(e) => handleFieldChange("image", e.target.value)}
        />
      </FormControl>
      <div className="inputRow">
        <div className="inputField">
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="destination-habitant">
              Nombre d'habitants
            </InputLabel>
            <Input
              id="destination-habitant"
              value={editedData.habitant}
              onChange={(e) => handleFieldChange("habitant", e.target.value)}
            />
          </FormControl>
        </div>
        <div className="inputField">
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="destination-hotel">Nombre d'hôtels</InputLabel>
            <Input
              id="destination-hotel"
              value={editedData.hotel}
              onChange={(e) => handleFieldChange("hotel", e.target.value)}
            />
          </FormControl>
        </div>
        <div className="inputField">
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="destination-revenue">
              Revenue Moy (€)
            </InputLabel>
            <Input
              id="destination-revenue"
              value={editedData.revenue}
              onChange={(e) => handleFieldChange("revenue", e.target.value)}
            />
          </FormControl>
        </div>
        <div className="inputField">
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="destination-superficie">
              Superficie (km<sup>2</sup>)
            </InputLabel>
            <Input
              id="destination-superficie"
              value={editedData.superficie}
              onChange={(e) => handleFieldChange("superficie", e.target.value)}
            />
          </FormControl>
        </div>
      </div>
      <DialogActions>
        <Button
          variant="text"
          sx={{ color: "#000"}}
          onClick={onClose}
        >
          Annuler
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleEditConfirm}
        >
          {isEditMode ? "Modifier" : "Ajouter"}
        </Button>
      </DialogActions>
    </ThemeProvider>
  );
}

export default DestinationForm;
