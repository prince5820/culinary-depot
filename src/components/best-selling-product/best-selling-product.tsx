import {
  Box,
  Button,
  Card,
  CardHeader,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import "./best-selling-product.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FavouriteIcon from "../../assets/icons/favourite_outlined_heart_love_icon.svg?react";
import { Link } from "react-router-dom";

const BestSellingProduct = () => {
  const bestSellingProduct = [
    {
      id: 1,
      name: "Scotsman MC0330MA-32 400 Lbs. Prodigy ELITE Air Co…",
      price: "3,223.00",
      img: "/public/images/best-selling-product-img-1.jpg",
    },
    {
      id: 2,
      name: "Scotsman MC0330SA-1 400 Lbs. Prodigy ELITE Air Coo…",
      price: "3,173.00",
      img: "/public/images/best-selling-product-img-2.jpg",
    },
    {
      id: 3,
      name: "Scotsman MC0530SA-1 525 Lbs. Prodigy ELITE Air Coo…",
      price: "3,525.00",
      img: "/public/images/best-selling-product-img-3.jpg",
    },
    {
      id: 4,
      name: "Scotsman MC0522SA-1 475 Lbs. Prodigy ELITE Air Coo…",
      price: "3,570.00",
      img: "/public/images/best-selling-product-img-4.jpg",
    },
    {
      id: 5,
      name: "Scotsman MC0322SA-1 356 Lbs. Prodigy ELITE Air Coo…",
      price: "3,367.00",
      img: "/public/images/best-selling-product-img-5.jpg",
    },
    {
      id: 6,
      name: "Scotsman MC0530Ma-1 525 Lbs. Prodigy ELITE Air Coo…",
      price: "3,525.00",
      img: "/public/images/best-selling-product-img-6.jpg",
    },
    {
      id: 7,
      name: "Scotsman MC430L-1 1425 to 1775 Lbs. Cube Style Pro…",
      price: "3,996.00",
      img: "/public/images/best-selling-product-img-7.jpg",
    },
    {
      id: 8,
      name: "Scotsman MC0830SA-32 905 Lbs. Prodigy ELITE Air Co…",
      price: "5,454.00",
      img: "/public/images/best-selling-product-img-8.jpg",
    },
    {
      id: 9,
      name: "Scotsman MC1448SA-32 1553 Lbs. Air Cooled Cube Sty…",
      price: "7,287.00",
      img: "/public/images/best-selling-product-img-9.jpg",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
      partialVisibilityGutter: 0, // Set to 0
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 0, // Set to 0
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 0, // Set to 0
    },
  };

  return (
    <Box className="wrapper-best-selling-product">
      <Box className="wrapper-title">
        <Typography className="line"></Typography>
        <Typography className="circle"></Typography>
        <Typography variant="h6" className="title">
          BEST SELLING PRODUCTS
        </Typography>
        <Typography className="circle"></Typography>
        <Typography className="line"></Typography>
      </Box>
      <Container className="wrapper-carousel-section">
        <Carousel
          responsive={responsive}
          infinite={false}
          autoPlay={false}
          centerMode={false} // Ensure no partial views
          keyBoardControl={true}
          arrows={true}
          showDots={false}
          renderButtonGroupOutside={true}
          containerClass="carousel-container"
          className="best-selling-carousel"
          itemClass="carousel-item-padding-40-px"
        >
          {bestSellingProduct.map((product) => (
            <Card key={product.id} className="card">
              <Link to="#">
                <CardHeader
                  title={product.name}
                  className="card-title"
                ></CardHeader>
              </Link>
              <Link to="#" style={{ marginTop: "10px", height: "218px" }}>
                <CardMedia
                  component="img"
                  src={product.img}
                  alt={product.name}
                  className="card-media"
                />
              </Link>
              <Box
                component="img"
                src="/public/images/freeshipping.webp"
                alt="Free Shipping"
              />
              <Box
                className="d-flex align-item-center justify-content-between"
                sx={{ margin: "10px 0 15px 0" }}
              >
                <Typography variant="h4" className="price">
                  ${product.price}
                </Typography>
                <FavouriteIcon className="favourite-icon" />
              </Box>
              <Button fullWidth variant="contained" className="add-to-card-btn">
                Add to Cart
              </Button>
            </Card>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default BestSellingProduct;
