import { Box, Button, Container, Typography } from "@mui/material";
import "./sticky-header.css";

const StickyHeader = () => {
  return (
    <Box className="wrapper-sticky-header">
      <Container className="sticky-header-container">
        <Box className="d-flex align-item-center">
          <Box
            component="img"
            src="/images/product-image-1.jpg"
            alt="Scotsman Air Cooled Ice Maker"
            className="sticky-header-product-img"
          />
          <Typography variant="h3" className="sticky-header-product-name">
            Scotsman MC0330MA-1 400 Lbs. Prodigy ELITE Air Cooled Cube Style Ice
            Maker - 115 Volts
          </Typography>
        </Box>
        <Box className="d-flex align-item-center justify-content-between">
          <Typography variant="h3" className="sticky-header-product-price">
            $3,173.00
            <Typography component="span" style={{ marginLeft: "8px" }}>
              / Each
            </Typography>
          </Typography>
          <Button variant="contained" className="sticky-header-add-to-cart-btn">
            Add to Cart
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default StickyHeader;
