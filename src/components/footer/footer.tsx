import {
  Box,
  Button,
  Container,
  Grid2,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import "./footer.css";
import NewsLetterIcon from "../../assets/icons/newsletter_icon.svg?react";
import { Link } from "react-router-dom";
import FacebookIcon from "../../assets/icons/facebook_icon.svg?react";
import InstagramIcon from "../../assets/icons/instagram_icon.svg?react";
import TwitterIcon from "../../assets/icons/twitter_bird_icon.svg?react";
import PinterestIcon from "../../assets/icons/pinterest_pintrest_social_icon.svg?react";
import LinkedInIcon from "../../assets/icons/linkedin_social_icon.svg?react";
import SignalIcon from "../../assets/icons/signal_icon.svg?react";

const Footer = () => {
  const socialIcons = [
    { component: FacebookIcon, label: "Facebook" },
    { component: InstagramIcon, label: "Instagram" },
    { component: TwitterIcon, label: "Twitter" },
    { component: PinterestIcon, label: "Pinterest" },
    { component: LinkedInIcon, label: "LinkedIn" },
    { component: SignalIcon, label: "Signal" },
  ];

  const corporateInfoLinks = ["About Us", "Our Supercenter", "Blog"];

  const customerServiceLinks = [
    "Contact US",
    "Commercial Kitchen Equipment Leasing",
    "Returns & Exchanges",
    "Privacy Policy",
    "Credit Application Form",
    "Shipping Information",
    "Build Your Own Bar",
  ];

  const accountLinks = [
    "My Account",
    "Orders",
    "Addresses",
    "Shopping Cart",
    "Wishlist",
  ];

  return (
    <Box className="wrapper-footer">
      <Box className="news-letter-section">
        <Container className="news-letter-container">
          <Grid2 container>
            <Grid2 size={7} className="d-flex align-item-center">
              <NewsLetterIcon className="news-letter-icon" />
              <Box>
                <Typography variant="h3" className="news-letter-heading">
                  EXCLUSIVE SAVINGS FOR MEMBERS
                </Typography>
                <Typography variant="body1" className="news-letter-subheading">
                  Sign Up For Special Offers, Promo Codes
                </Typography>
              </Box>
            </Grid2>
            <Grid2 size={5} className="d-flex align-item-center">
              <TextField
                placeholder="Enter your email here..."
                variant="outlined"
                className="subscribe-textfield"
                fullWidth
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button
                          variant="contained"
                          className="subscribe-button"
                        >
                          SUBSCRIBE
                        </Button>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Grid2>
          </Grid2>
        </Container>
      </Box>
      <Box className="wrapper-footer-nav">
        <Container className="footer-nav-container">
          <Grid2 container>
            <Grid2 size={3.12} className="nav-col">
              <Box
                component="img"
                src="/src/assets/images/logo-white-footer.webp"
                alt="White Logo Footer"
              />
              <Box className="address">
                <Typography variant="body2">Culinary Depot</Typography>
                <Typography variant="body2">
                  67 Route 59 Spring Valley, NY 10977
                </Typography>
              </Box>
              <Link to="#" style={{ padding: "0 12px" }}>
                (888) 845-8200
              </Link>
              <Typography variant="body1" className="social-icon-section">
                Let's Connect
              </Typography>
              <Box className="d-flex align-item-center" sx={{ gap: "10px" }}>
                {socialIcons.map((icon, index) => {
                  const IconComponent = icon.component;
                  return (
                    <Link to="#" key={index} className="social-icon-link">
                      <IconComponent className="social-icon" />
                    </Link>
                  );
                })}
              </Box>
            </Grid2>
            <Grid2 size={2.4} className="nav-col">
              <Typography variant="h5" className="footer-nav-heading">
                Corporate Info
              </Typography>
              <Box
                className="d-flex"
                sx={{ gap: "10px", flexDirection: "column" }}
              >
                {corporateInfoLinks.map((link, index) => (
                  <Link to="#" key={index}>
                    {link}
                  </Link>
                ))}
              </Box>
            </Grid2>
            <Grid2 size={2.4} className="nav-col">
              <Typography variant="h5" className="footer-nav-heading">
                Customer service
              </Typography>
              <Box
                className="d-flex"
                sx={{ gap: "10px", flexDirection: "column" }}
              >
                {customerServiceLinks.map((link, index) => (
                  <Link to="#" key={index}>
                    {link}
                  </Link>
                ))}
              </Box>
            </Grid2>
            <Grid2 size={2.4} className="nav-col">
              <Typography variant="h5" className="footer-nav-heading">
                Account
              </Typography>
              <Box
                className="d-flex"
                sx={{ gap: "10px", flexDirection: "column" }}
              >
                {accountLinks.map((link, index) => (
                  <Link to="#" key={index}>
                    {link}
                  </Link>
                ))}
              </Box>
            </Grid2>
            <Grid2 size={1.68} className="wrapper-footer-nav-image nav-col">
              <Box
                component="img"
                src="/src/assets/images/footer-nav-img-1.webp"
                alt="Culinary Depot Review Image"
                className="footer-nav-image"
              />
              <Link to="#">
                <Box
                  component="img"
                  src="/src/assets/images/footer-nav-img-2.webp"
                  alt="Accredited Bussiness Image"
                  className="footer-nav-image"
                />
              </Link>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
      <Box className="wrapper-footer-copyright">
        <Container className="d-flex align-item-center justify-content-between footer-copyright-container">
          <Typography variant="caption">
            Developed by&nbsp;
            <Link to="#" className="culinary-depot-link">
              Culinary Depot
            </Link>
          </Typography>
          <Typography variant="caption">
            Copyright &copy; 1995 to 2024 Culinary Depot. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
