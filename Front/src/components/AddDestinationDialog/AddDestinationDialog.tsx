import theme from "../../theme";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Destination } from "../../Interfaces/DestinationType";
import DestinationForm from "../DestinationForm/DestinationForm";

interface AddDestinationDialogProps {
  open: boolean;
  onClose: () => void;
  onAdd: (editedData: Destination) => void;
}

function AddDestinationDialog({
  open,
  onClose,
  onAdd,
}: AddDestinationDialogProps) {
  return (
    <ThemeProvider theme={theme}>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle variant="h6">Ajouter une nouvelle destination</DialogTitle>
        <DialogContent>
          <DestinationForm
            isEditMode={false}
            destination={null}
            onClose={onClose}
            onSubmit={onAdd}
          />
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
}

export default AddDestinationDialog;
