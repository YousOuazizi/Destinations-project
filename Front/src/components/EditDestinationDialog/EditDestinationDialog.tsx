import theme from "../../theme";
import {
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Destination } from "../../Interfaces/DestinationType";
import "./EditDestinationDialog.css";
import DestinationForm from "../DestinationForm/DestinationForm";

interface EditDestinationDialogProps {
  open: boolean;
  onClose: () => void;
  destination: Destination | null;
  onEdit: (editedData: Destination) => void;
}

function EditDestinationDialog({
  open,
  onClose,
  destination,
  onEdit,
}: EditDestinationDialogProps) {
  return (
    <ThemeProvider theme={theme}>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle variant="h6">Modifier une destination</DialogTitle>
        <DialogContent>
          <DestinationForm
            isEditMode={true}
            destination={destination}
            onClose={onClose}
            onSubmit={onEdit}
          />
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
}

export default EditDestinationDialog;
