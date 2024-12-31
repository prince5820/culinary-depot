import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Grid2,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./mui-custom.css";
import "./product-details.css";
import FavouriteIcon from "../../assets/icons/favourite_outlined_heart_love_icon.svg?react";

const ProductDetails = () => {
  const [binOption, setBinOption] = useState<string>("");
  const [dispenserOption, setDispenserOption] = useState<string>("");
  const [waterFilterationOption, setWaterFilterationOption] =
    useState<string>("");
  const [cartItem, setCartItem] = useState<number>(1);

  const productThumbnails = [
    {
      imageUrl: "/images/product-view-thumbnail-img-1.jpg",
      alt: "Product View Thumbnail",
    },
    {
      imageUrl: "/images/product-view-thumbnail-img-2.jpg",
      alt: "Product View Thumbnail",
    },
    {
      imageUrl: "/images/product-view-thumbnail-img-3.jpg",
      alt: "Product View Thumbnail",
    },
    {
      imageUrl: "/images/product-view-thumbnail-img-4.jpg",
      alt: "Product View Thumbnail",
    },
    {
      imageUrl: "/images/product-view-thumbnail-img-5.jpg",
      alt: "Product View Thumbnail",
      isYoutube: true,
    },
  ];

  return (
    <Grid2 container spacing={2} className="wrapper-product-details">
      <Grid2 size={6}>
        <Box
          component="img"
          src="/images/scotsman-brand-name-logo.jpg"
          alt="Brand Name Logo"
        />
        <Box
          component="img"
          src="/images/product-image-1.jpg"
          alt="Scotsman Air Cooled Ice Maker"
          className="scotsman-ice-maker-img"
        />
        {/* Thumbnails displayed in a row */}
        <Grid2
          container
          spacing={2}
          direction="row"
          className="thumbnail-container"
        >
          {productThumbnails.map((thumbnail, index) => (
            <Grid2 key={index}>
              <Link to="#" className="thumbnail-image-link">
                <Box
                  component="img"
                  src={thumbnail.imageUrl}
                  alt={thumbnail.alt}
                  className="thumbnail-background"
                />
                {thumbnail.isYoutube && (
                  <Box
                    component="img"
                    src="/images/product-view-thumbnail-img-youtube-play.webp"
                    alt="YouTube Play Icon"
                    className="youtube-play-icon"
                  />
                )}
              </Link>
            </Grid2>
          ))}
        </Grid2>
      </Grid2>
      <Grid2 size={6}>
        <Typography className="product-heading">
          Scotsman MC0330MA-1 400 Lbs. Prodigy ELITE Air Cooled Cube Style Ice
          Maker - 115 Volts
        </Typography>
        <Box className="product-info">
          <Box className="info">
            <Typography
              variant="body2"
              className="label"
              sx={{ fontSize: "12px" }}
            >
              SKU:
            </Typography>
            <Typography
              variant="body2"
              className="value"
              sx={{ fontSize: "12px" }}
            >
              C0330MA-1
            </Typography>
          </Box>
          <Box className="info">
            <Typography
              variant="body2"
              className="label"
              sx={{ fontSize: "12px" }}
            >
              MPN:
            </Typography>
            <Typography
              variant="body2"
              className="value"
              sx={{ fontSize: "12px" }}
            >
              MC0330MA-1
            </Typography>
          </Box>
        </Box>
        <Link to="#" className="review-link">
          <Typography variant="body1">Write a review</Typography>
        </Link>
        <Box className="free-shipping-credit-key-section">
          <Box
            component="img"
            src="/images/freeshipping.webp"
            alt="Free Shipping Image"
          />
          <Link to="#" className="credit-key">
            <Typography>
              From $294 / month with &nbsp;
              <Box
                component="img"
                src="/images/credit-key.png"
                alt="Credit Key"
                sx={{ height: "17px", width: "83px" }}
              />
            </Typography>
          </Link>
        </Box>
        <Box className="price-section">
          <Typography variant="body2" className="price-text">
            $3,173.00
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>&nbsp; / Each</Typography>
          <Link to="#" className="ships-free-with-pro-section">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: "10px", whiteSpace: "nowrap" }}>
                Ships free with
              </Typography>
              <Box
                component="img"
                src="/images/pro-icon.png"
                alt="Pro Button"
                className="pro-img"
                sx={{ marginLeft: "20px" }}
              />
            </Box>
          </Link>
        </Box>
        <Divider />
        <Box className="product-options">
          <FormControl fullWidth className="custom-form-control">
            <FormLabel className="custom-form-label">Bin Options:</FormLabel>
            <Select
              value={binOption}
              onChange={(e) => setBinOption(e.target.value)}
              displayEmpty
              className="custom-select"
              MenuProps={{
                PaperProps: {
                  className: "custom-menu-paper",
                },
                MenuListProps: {
                  className: "custom-menu-list",
                },
              }}
            >
              <MenuItem value="" className="custom-menu-item">
                <em>None</em>
              </MenuItem>
              <MenuItem
                value='Scotsman B530P 30"W Ice Bin $1225'
                className="custom-menu-item"
              >
                Scotsman B530P 30"W Ice Bin $1225
              </MenuItem>
              <MenuItem
                value='Scotsman B530S 30"W Ice Bin $1301'
                className="custom-menu-item"
              >
                Scotsman B530S 30"W Ice Bin $1301
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth className="custom-form-control">
            <FormLabel className="custom-form-label">
              Dispenser Options:
            </FormLabel>
            <Select
              value={dispenserOption}
              onChange={(e) => setDispenserOption(e.target.value)}
              displayEmpty
              className="custom-select"
              MenuProps={{
                PaperProps: {
                  className: "custom-menu-paper",
                },
                MenuListProps: {
                  className: "custom-menu-list",
                },
              }}
            >
              <MenuItem value="" className="custom-menu-item">
                <em>None</em>
              </MenuItem>
              <MenuItem
                value='Scotsman HD30B-1 30"W IceValet Hotel/Motel Ice Dispenser 180 lb. $4081'
                className="custom-menu-item"
              >
                Scotsman HD30B-1 30"W IceValet Hotel/Motel Ice Dispenser 180 lb.
                $4081
              </MenuItem>
              <MenuItem
                value='Scotsman HD30W-1 30"W IceValet Hotel/Motel Ice Dispenser 180 lb. $4490'
                className="custom-menu-item"
              >
                Scotsman HD30W-1 30"W IceValet Hotel/Motel Ice Dispenser 180 lb.
                $4490
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth className="custom-form-control">
            <FormLabel className="custom-form-label">
              Water Filtration Options:
            </FormLabel>
            <Select
              value={waterFilterationOption}
              onChange={(e) => setWaterFilterationOption(e.target.value)}
              displayEmpty
              className="custom-select"
              MenuProps={{
                PaperProps: {
                  className: "custom-menu-paper",
                },
                MenuListProps: {
                  className: "custom-menu-list",
                },
              }}
            >
              <MenuItem value="" className="custom-menu-item">
                <em>None</em>
              </MenuItem>
              <MenuItem
                value="Scotsman AP1-P AquaPatrol Plus Single System Water Filtration System - 650 Lb $238"
                className="custom-menu-item"
              >
                Scotsman AP1-P AquaPatrol Plus Single System Water Filtration
                System - 650 Lb $238
              </MenuItem>
              <MenuItem
                value="Scotsman SSM1-P SSM Plus Water Filter Assembly - 650 Lb $316"
                className="custom-menu-item"
              >
                Scotsman SSM1-P SSM Plus Water Filter Assembly - 650 Lb $316
              </MenuItem>
            </Select>
          </FormControl>
          <Box className="add-to-cart-section">
            <Box className="increment-decrement-section">
              <Box
                className="increment-decrement-btn"
                onClick={() =>
                  setCartItem((prevState: number) => Math.max(prevState - 1, 1))
                }
              >
                -
              </Box>
              <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                {cartItem}
              </Typography>
              <Box
                className="increment-decrement-btn"
                onClick={() =>
                  setCartItem((prevState: number) => prevState + 1)
                }
              >
                +
              </Box>
            </Box>
            <Button variant="contained" className="add-to-cart-btn">
              Add to Cart
            </Button>
            <Link to="#">
              <FavouriteIcon className="favourite-icon" />
            </Link>
          </Box>
        </Box>
        <Divider sx={{ marginBottom: "20px" }} />
        <Box
          component="img"
          src="/images/cd-instock-new-icon.jpg"
          alt="In stock icon"
          sx={{
            height: "26.55px",
          }}
        />
        <Typography variant="body2" className="sort-description">
          Equip your commercial establishment with cost-efficient equipment like
          the Scotsman C0330MA-1 Prodigy Plus Modular Cube Ice Machine. It
          utilizes smart technology to produce fresh-tasting medium cube ice
          ideal for mixed drinks!
        </Typography>
        <Typography variant="h4" className="description-heading">
          Product Highlights
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemIcon sx={{ color: "#d1093f", minWidth: "30px" }}>
              ■
            </ListItemIcon>
            <ListItemText>Patented Harvest Assist</ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon sx={{ color: "#d1093f", minWidth: "30px" }}>
              ■
            </ListItemIcon>
            <ListItemText>Smart-Board advanced feature</ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon sx={{ color: "#d1093f", minWidth: "30px" }}>
              ■
            </ListItemIcon>
            <ListItemText>AutoAlert indicator lights</ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon sx={{ color: "#d1093f", minWidth: "30px" }}>
              ■
            </ListItemIcon>
            <ListItemText>
              Produces 400 pounds of medium-sized cubes of ice
            </ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon sx={{ color: "#d1093f", minWidth: "30px" }}>
              ■
            </ListItemIcon>
            <ListItemText>Easy to clean and maintain</ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon sx={{ color: "#d1093f", minWidth: "30px" }}>
              ■
            </ListItemIcon>
            <ListItemText>
              Air-cooled, self-contained condenser unit
            </ListItemText>
          </ListItem>
        </List>
      </Grid2>
    </Grid2>
  );
};

export default ProductDetails;
