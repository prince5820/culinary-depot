import {
  AppBar,
  Box,
  Button,
  Grid2,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import PersonIcon from "../../../assets/icons/person.svg?react";
import SearchIcon from "../../../assets/icons/search-icon.svg?react";
import ShoppingCartIcon from "../../../assets/icons/shopping-cart.svg?react";
import "./logo-action-bar.css";

const LogoActionBar = () => {
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "white", boxShadow: "none" }}
      className="wrapper-logo-action-bar"
    >
      <Toolbar>
        <Grid2 container spacing={4} alignItems="center" sx={{ width: "100%" }}>
          <Grid2 size={1}>
            <Link to="#">
              <Box
                component="img"
                src="/images/logo.webp"
                alt="Culinary Depot Logo"
                style={{ height: 50 }}
              />
            </Link>
          </Grid2>

          <Grid2 size={7.5}>
            <TextField
              placeholder="I'm looking for..."
              variant="outlined"
              className="header-searchbar"
              fullWidth
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button variant="contained" className="search-icon-btn">
                        <SearchIcon className="search-icon" />
                      </Button>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Grid2>

          <Grid2 size={1.5}>
            <Link to="#" className="d- flex call-us-section">
              <Typography variant="body2" className="call-us-text">
                CALL US:
              </Typography>
              <Typography variant="body2" className="call-us-number">
                (888) 845-8200
              </Typography>
            </Link>
          </Grid2>

          <Grid2 size={1}>
            <Link to="#" className="d-flex align-item-center">
              <PersonIcon className="action-bar-icon" />
              <Typography className="link-text">Login</Typography>
            </Link>
          </Grid2>

          <Grid2 size={1}>
            <Link to="#" className="d-flex align-item-center">
              <ShoppingCartIcon className="action-bar-icon" />
              <Typography className="link-text">My Cart</Typography>
            </Link>
          </Grid2>
        </Grid2>
      </Toolbar>
    </AppBar>
  );
};

export default LogoActionBar;
