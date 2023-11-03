import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import PlayIcon from "@mui/icons-material/PlayArrow"

const AddToPreviewsIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToPreviews = (e) => {
    e.preventDefault();
    context.addToPreviews(movie);
  };

  return (
    <IconButton aria-label="add previews" onClick={handleAddToPreviews}>
      <PlayIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToPreviewsIcon;