import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./related-items.css";
import FavouriteIcon from "../../assets/icons/favourite_outlined_heart_love_icon.svg?react";

const RelatedItems = () => {
  const carouselItemArray1 = [
    {
      id: 1,
      name: "Blue Air BLMI-300A 300 Lb. Production 24 Hours. Stainless Steel Crescent Ice Machine - 115 Volts",
      price: "2671.40",
      img: "/src/assets/images/related-item-img-2.webp",
    },
    {
      id: 2,
      name: "Blue Air BLMI-500A 538 Lb. Production 24 Hours. Stainless Steel Crescent Ice Machine - 115 Volts",
      price: "2878.32",
      img: "/src/assets/images/related-item-img-3.webp",
    },
    {
      id: 3,
      name: "Scotsman MC0330SA-1 400 Lbs. Prodigy ELITE Air Cooled Cube Style Ice Maker - 115 Volts",
      price: "3173.00",
      img: "/src/assets/images/related-item-img-4.jpg",
    },
    {
      id: 4,
      name: 'Scotsman MC0322MA-32 22" W Prodigy ELITE Ice Maker - 208-230 Volts',
      price: "3447.00",
      img: "/src/assets/images/related-item-img-5.jpg",
    },
    {
      id: 5,
      name: "Scotsman MC1848SA-32 1909 Lbs. Air Cooled Cube Style Prodigy ELITE Ice Maker - 208-230 Volts",
      price: "9317.00",
      img: "/src/assets/images/related-item-img-6.jpg",
    },
    {
      id: 6,
      name: "Scotsman NS1322A-32 1385 Lbs. Stainless Steel Nugget Style Prodigy Plus Ice Maker - 208-230 Volts",
      price: "9161.00",
      img: "/src/assets/images/related-item-img-7.webp",
    },
    {
      id: 7,
      name: 'Scotsman MC0322MA-1 22" W Prodigy ELITE Ice Maker - 115 Volts',
      price: "3397.00",
      img: "/src/assets/images/related-item-img-8.jpg",
    },
    {
      id: 8,
      name: "Scotsman NS0422A-1 420 Lbs. Stainless Steel Nugget Style Prodigy Plus Ice Maker - 115 Volts",
      price: "4336.00",
      img: "/src/assets/images/related-item-img-9.webp",
    },
  ];

  const carouselItemArray2 = [
    {
      id: 1,
      name: "Scotsman NS0922A-6 956 Lbs. Stainless Steel Nugget Style Prodigy Plus Ice Maker - 230 Volts",
      price: "7306.00",
      img: "/src/assets/images/items-you-might-like-1.webp",
    },
    {
      id: 2,
      name: 'Scotsman MC0522MA-1 22" W Prodigy ELITE Ice Maker - 115 Volts',
      price: "3570.00",
      img: "/src/assets/images/items-you-might-like-2.jpg",
    },
    {
      id: 3,
      name: "Scotsman MC1448SA-32 1553 Lbs. Air Cooled Cube Style Prodigy ELITE Ice Maker - 208-230 Volts",
      price: "7287.00",
      img: "/src/assets/images/items-you-might-like-3.jpg",
    },
    {
      id: 4,
      name: "Scotsman MC0522SA-1 475 Lbs. Prodigy ELITE Air Cooled Cube Style Ice Maker - 115 Volts",
      price: "3570.00",
      img: "/src/assets/images/items-you-might-like-4.jpg",
    },
    {
      id: 5,
      name: "Scotsman MC0830SA-32 905 Lbs. Prodigy ELITE Air Cooled Cube Style Ice Maker - 208-230 Volts",
      price: "5454.00",
      img: "/src/assets/images/items-you-might-like-5.jpg",
    },
    {
      id: 6,
      name: "Scotsman MC0530SA-1 525 Lbs. Prodigy ELITE Air Cooled Cube Style Ice Maker - 115 Volts",
      price: "3525.00",
      img: "/src/assets/images/items-you-might-like-6.jpg",
    },
    {
      id: 7,
      name: "Scotsman MC0530Ma-1 525 Lbs. Prodigy ELITE Air Cooled Cube Style Ice Maker - 115 Volts",
      price: "3525.00",
      img: "/src/assets/images/items-you-might-like-7.jpg",
    },
    {
      id: 8,
      name: "Scotsman MC0630SA-32 640 Lbs. Prodigy Elite Ice Maker",
      price: "4342.00",
      img: "/src/assets/images/items-you-might-like-8.jpg",
    },
    {
      id: 9,
      name: 'Scotsman FS1222A-6 24" D Air-Cooled Flake Style Prodigy Plus Ice Maker - 230 Volts',
      price: "7033.00",
      img: "/src/assets/images/items-you-might-like-9.webp",
    },
    {
      id: 10,
      name: "Scotsman MC1448SA-3 1553 Lbs. Air Cooled Cube Style Prodigy ELITE Ice Maker - 208-230 Volts",
      price: "7377.00",
      img: "/src/assets/images/items-you-might-like-10.jpg",
    },
    {
      id: 11,
      name: "Scotsman MC0530MA-32 525 Lbs. Prodigy ELITE Air Cooled Cube Style Ice Maker - 208-230 Volts",
      price: "3575.00",
      img: "/src/assets/images/items-you-might-like-11.jpg",
    },
    {
      id: 12,
      name: "Scotsman MC0830MA-3 905 Lbs. Prodigy ELITE Air Cooled Cube Style Ice Maker - 208-230 Volts",
      price: "5544.00",
      img: "/src/assets/images/items-you-might-like-12.jpg",
    },
    {
      id: 13,
      name: 'Harold Import 98048 13" x 9" White Porcelain Rectangular HIC Lasagna Pan',
      price: "28.57",
      img: "/src/assets/images/items-you-might-like-13.webp",
    },
    {
      id: 14,
      name: 'Flash Furniture XA-FARM-16-GG 108" W x 40" D x 30" H Rectangular Antique Rustic Folding Hercules Series Farm Table Set with 12 Chairs',
      price: "1780.17",
      img: "/src/assets/images/items-you-might-like-14.webp",
    },
    {
      id: 15,
      name: "InSinkErator SS-100 Stainless Steel Disposer - 1 HP",
      price: "1538.00",
      img: "/src/assets/images/items-you-might-like-15.webp",
    },
    {
      id: 16,
      name: "KitchenAid KGM 6 Qt. Metal Grain Mill with Cleaning Brush",
      price: "149.99",
      img: "/src/assets/images/items-you-might-like-16.jpg",
    },
    {
      id: 17,
      name: "Fagor CO-402W EVO CONCEPT IPX4 Electronic Controls High Temperature Undercounter Glasswasher",
      price: "2199.00",
      img: "/src/assets/images/items-you-might-like-17.webp",
    },
    {
      id: 18,
      name: "Skyfood LAR-25PMB 6.5 Gal. Floor Model Stainless Steel Skyfood Blender - 110 Volts",
      price: "822.14",
      img: "/src/assets/images/items-you-might-like-18.webp",
    },
    {
      id: 19,
      name: 'Flash Furniture XA-FARM-15-GG 108" W x 40" D x 30" H Rectangular Antique Rustic Folding Hercules Series Farm Table Set with 10 Chairs',
      price: "1575.90",
      img: "/src/assets/images/items-you-might-like-19.webp",
    },
    {
      id: 20,
      name: "Vitamix 036019-ABAB The Quiet One Vitamix Quiet Blender 48 Oz.",
      price: "1135.34",
      img: "/src/assets/images/items-you-might-like-20.jpg",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
      partialVisibilityGutter: 20,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 10,
    },
  };

  return (
    <Box className="wrapper-related-items">
      <Container className="related-items-container">
        <Box className="related-items-container">
          <Typography
            variant="h6"
            sx={{
              letterSpacing: "0.8px",
              fontSize: "22px",
              fontWeight: "700",
              paddingLeft: "12px",
            }}
          >
            Related Items
          </Typography>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={false}
            itemClass="carousel-item-padding"
          >
            {carouselItemArray1.map((product) => (
              <Card
                key={product.id}
                sx={{
                  margin: "8px",
                  padding: "20px 30px",
                  borderRadius: "7px",
                }}
              >
                <Box className="d-flex align-item-center justify-content-between">
                  <CardMedia
                    component="img"
                    image={product.img}
                    alt={product.name}
                    style={{
                      objectFit: "contain",
                      height: "100px",
                      width: "100px",
                    }}
                  />
                  <CardContent sx={{ padding: "0 0 16px 16px" }}>
                    <Typography variant="subtitle1" className="title">
                      {product.name}
                    </Typography>
                    <Typography variant="h6" className="price">
                      ${product.price}
                      <Typography
                        component="span"
                        sx={{
                          fontSize: "11px",
                          color: "black",
                          marginLeft: "5px",
                        }}
                      >
                        / Each
                      </Typography>
                    </Typography>
                  </CardContent>
                </Box>
                <Divider sx={{ marginBottom: "15px" }} />
                <Box className="d-flex align-item-center justify-content-between">
                  <Button variant="contained" className="add-to-cart-btn">
                    Add to Cart
                  </Button>
                  <FavouriteIcon className="favourite-icon" />
                </Box>
              </Card>
            ))}
          </Carousel>
        </Box>
        <Box className="items-you-might-like-container">
          <Typography
            variant="h6"
            sx={{
              letterSpacing: "0.8px",
              fontSize: "22px",
              fontWeight: "700",
              paddingLeft: "12px",
              marginTop: "22px",
            }}
          >
            Items You Might Like
          </Typography>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={false}
            containerClass="items-you-might-like-container"
            itemClass="carousel-item-padding"
          >
            {carouselItemArray2.map((product) => (
              <Card
                key={product.id}
                sx={{
                  margin: "8px",
                  padding: "20px 30px",
                  borderRadius: "7px",
                }}
              >
                <Box className="d-flex align-item-center justify-content-between">
                  <CardMedia
                    component="img"
                    image={product.img}
                    alt={product.name}
                    style={{
                      objectFit: "contain",
                      height: "100px",
                      width: "100px",
                    }}
                  />
                  <CardContent sx={{ padding: "0 0 16px 16px" }}>
                    <Typography variant="subtitle1" className="title">
                      {product.name}
                    </Typography>
                    <Typography variant="h6" className="price">
                      ${product.price}
                      <Typography
                        component="span"
                        sx={{
                          fontSize: "11px",
                          color: "black",
                          marginLeft: "5px",
                        }}
                      >
                        / Each
                      </Typography>
                    </Typography>
                  </CardContent>
                </Box>
                <Divider sx={{ marginBottom: "15px" }} />
                <Box className="d-flex align-item-center justify-content-between">
                  <Button variant="contained" className="add-to-cart-btn">
                    Add to Cart
                  </Button>
                  <FavouriteIcon className="favourite-icon" />
                </Box>
              </Card>
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
};

export default RelatedItems;
