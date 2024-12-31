import { Box, Typography } from "@mui/material";
import "./top-pencil-banner.css";
import { Link } from "react-router-dom";

const TopPencilBanner = () => {
  return (
    <Box className="wrapper-top-pencil-banner d-flex align-item-center justify-content-between">
      <Link to="#">
        <Box
          component="img"
          src="/images/visit-showroom-img.webp"
          alt="visit-showroom-image"
          sx={{
            height: "auto",
            verticalAlign: "middle",
          }}
        />
      </Link>

      <Box className="pencil-banner-section d-flex align-item-center justify-content-between">
        <Box className="pro-banner-section d-flex align-item-center justify-content-between">
          <Box
            component="img"
            src="/images/pro-icon.png"
            alt="pro-icon"
            sx={{
              width: "52px",
              height: "24px",
            }}
          />
          <Typography className="pro-content">
            Sign up for pro and receive more
          </Typography>
          <Link
            to="#"
            className="pro-link d-flex align-item-center justify-content-center"
          >
            Go Pro Now
          </Link>
        </Box>
        <Box>
          <Link to="#" className="pencil-banner-link">
            Live Chat
          </Link>
        </Box>
        <Box>
          <Link to="#" className="pencil-banner-link">
            About Us
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default TopPencilBanner;
