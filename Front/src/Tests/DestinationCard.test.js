import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DestinationCard from '../components/DestinationCard/DestinationCard';

test('renders DestinationCard correctly and checks interactions', () => {
  const mockOnEdit = jest.fn();
  const mockOnDelete = jest.fn();
  const mockOnToggleBlock = jest.fn();

  const mockDestination = {
    id: "1",
    name: "Paris",
    address: "France",
    image: "",
    habitant: "2M",
    hotel: "500",
    revenue: "10k",
    superficie: "105",
    isBlocked: false
  };

  render(<DestinationCard destination={mockDestination} onEdit={mockOnEdit} onDelete={mockOnDelete} onToggleBlock={mockOnToggleBlock} />);

  // Vérifiez que le nom et l'adresse sont affichés
  expect(screen.getByText("Paris")).toBeInTheDocument();
  expect(screen.getByText("France")).toBeInTheDocument();

  // Simulez le clic sur les boutons et vérifiez les rappels
  userEvent.click(screen.getByTestId('EditIcon').closest('button'));
userEvent.click(screen.getByTestId('DeleteIcon').closest('button'));


  userEvent.click(screen.getByRole('checkbox'));
  expect(mockOnToggleBlock).toHaveBeenCalledWith(mockDestination);
});
