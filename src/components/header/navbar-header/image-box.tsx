import { Box, Typography } from "@mui/material";
import "./navbar.css";
import ArrowIcon from "../../../assets/icons/arrow_next_right_icon.svg?react";

const ImageBox = ({ imageSrc, title, linkText }: any) => {
  return (
    <Box className="image-box-wrapper">
      <Box component="img" src={imageSrc} alt={title} className="image-box" />
      <Box className="text-overlay">
        <Typography variant="h6" className="title">
          {title}
        </Typography>
        <Typography variant="body2" className="link">
          {linkText}
        </Typography>
        <Typography variant="body2" className="link">
          Shop All <ArrowIcon className="arrow-icon" />
        </Typography>
      </Box>
    </Box>
  );
};

export default ImageBox;
