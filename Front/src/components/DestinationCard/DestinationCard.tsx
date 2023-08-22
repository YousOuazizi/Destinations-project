import React from "react";
import { Destination } from "../../Interfaces/DestinationType";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Switch,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./DestinationCard.css";

// Les propriétés attendues pour ce composant
interface DestinationCardProps {
  destination: Destination;
  openEdit: (destination: Destination) => void;  
  onDelete: (destination: Destination) => void;
  onToggleBlock: (destination: Destination) => void;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  openEdit,
  onDelete,
  onToggleBlock,
}) => {
  return (
    <Card className="destination-card">
      <CardContent>
        <div className="card-content">
          <div className="card-buttons">
            <IconButton
              className="card-icon edit-icon"
              onClick={() => openEdit(destination)}
              disabled={destination.isBlocked}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              className="card-icon delete-icon"
              onClick={() => onDelete(destination)}
              disabled={destination.isBlocked}
            >
              {destination.isBlocked ? (
                <DeleteIcon color="disabled" />
              ) : (
                <DeleteIcon color="error" />
              )}
            </IconButton>
          </div>
          <img
            className="destination-image"
            src={destination.image}
            alt={destination.name}
          />
          <div className="destination-header">
            <div className="destination-text">
              <Typography variant="body1" className="destination-name">
                {destination.name}
              </Typography>
              <Typography
                variant="caption"
                color="info.main"
                className="destination-address"
              >
                {destination.address}
              </Typography>
            </div>
            <Switch
              checked={destination.isBlocked}
              onChange={() => onToggleBlock(destination)}
            />
          </div>
          <Divider variant="middle" sx={{ margin: "0" }} />
        </div>
        <div className="extra-details">
          <div>
            <Typography variant="body2" className="extra-value">
              {destination.habitant} M
            </Typography>
            <Typography
              variant="caption"
              color="info.main"
              className="extra-label"
            >
              Habitants
            </Typography>
          </div>
          <div>
            <Typography variant="body2" className="extra-value">
              {destination.hotel}
            </Typography>
            <Typography
              variant="caption"
              color="info.main"
              className="extra-label"
            >
              Hôtels
            </Typography>
          </div>
          <div>
            <Typography variant="body2" className="extra-value">
              {destination.revenue} €
            </Typography>
            <Typography
              variant="caption"
              color="info.main"
              className="extra-label"
            >
              Revenue Moy
            </Typography>
          </div>
          <div>
            <Typography variant="body2" className="extra-value">
              {destination.superficie}
            </Typography>
            <Typography
              variant="caption"
              color="info.main"
              className="extra-label"
            >
              km<sup>2</sup>
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
