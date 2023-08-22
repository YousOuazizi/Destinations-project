import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import { Destination } from "../../Interfaces/DestinationType";

interface ConfirmDeleteDialogProps {
  onDelete: () => void;
  onClose: () => void;
  isOpen: boolean;
  selectedDestination: Destination | null; 
}

function ConfirmDeleteDialog({
  onDelete,
  onClose,
  isOpen,
  selectedDestination,
}: ConfirmDeleteDialogProps) {
  return (
    <ThemeProvider theme={theme}>
      <Dialog open={isOpen}>
        <DialogTitle>Confirmer la suppression  </DialogTitle>
        <DialogContent>
          Êtes-vous sûr de vouloir supprimer cette destination ?
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Annuler</Button>
          <Button onClick={onDelete} color="error">
            Supprimer
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}

export default ConfirmDeleteDialog;
