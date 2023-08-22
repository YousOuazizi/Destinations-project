import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddDestinationDialog from "../components/AddDestinationDialog/AddDestinationDialog";

test("renders AddDestinationDialog and checks interactions", () => {
  const mockOnClose = jest.fn();
  const mockOnAdd = jest.fn();

  render(
    <AddDestinationDialog open={true} onClose={mockOnClose} onAdd={mockOnAdd} />
  );

  // Testez l'interaction: par exemple, remplissez le formulaire et appuyez sur le bouton de soumission
  userEvent.type(screen.getByLabelText(/Name/i), "Paris");
  userEvent.click(screen.getByRole("button", { name: /Ajouter/i }));

  expect(mockOnAdd).toHaveBeenCalledWith(
    expect.objectContaining({ name: "Paris" })
  );
});
