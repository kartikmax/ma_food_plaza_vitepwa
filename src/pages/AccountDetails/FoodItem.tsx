import React, { useState } from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import {
  Fastfood as FoodIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";

import "./FoodItem.css"; // Import a CSS file for styling

interface FoodItemProps {
  primary: string;
  description: string;
  serialNo: string;
  imageSrc: string;
  halfPrice: number;
  fullPrice: number;
}

const FoodItem: React.FC<FoodItemProps> = ({
  primary,
  description,
  serialNo,
  imageSrc,
  halfPrice,
  fullPrice,
}) => {
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const openDeleteDialog = () => {
    setDeleteDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    setDeleteDialogOpen(false);
  };

  const handleDelete = () => {
    // Implement your delete logic here
    // Close the dialog after deletion
    closeDeleteDialog();
  };

  return (
    <ListItem className="food-item">
      <div className="food-item-content">
        <ListItemAvatar>
          <Avatar>
            <FoodIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={primary}
          secondary={
            <>
              <span>{`Description: ${description}`}</span>
              <br />
              <span>{`Serial No: ${serialNo}`}</span>
              <br />
              <span>{`Half Price: $${halfPrice}`}</span>
              <br />
              <span>{`Full Price: $${fullPrice}`}</span>
            </>
          }
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="edit">
            <EditIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete" onClick={openDeleteDialog}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </div>
      <img src={imageSrc} alt={primary} className="food-image" />

      <Dialog open={isDeleteDialogOpen} onClose={closeDeleteDialog}>
        <DialogTitle>Delete Food Item</DialogTitle>
        <DialogContent>
          Are you sure you want to delete {primary} from your list?
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDeleteDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </ListItem>
  );
};

export default FoodItem;
