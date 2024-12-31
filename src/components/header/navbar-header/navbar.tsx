import {
  AppBar,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid2,
  Toolbar,
  Typography
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowNext from "../../../assets/icons/arrow_next_right_icon.svg?react";
import ImageBox from "./image-box";
import "./navbar.css";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const menus = [
    {
      name: "Restaurant Equipment",
      subMenu: [
        {
          name: "Cooking Equipment",
          imageUrl: "/images/coooking equipment.jpg",
        },
        {
          name: "Commercial Oven",
          imageUrl: "/images/commercial oven.jpg",
        },
        {
          name: "Commercial Ice Equipment and Supplies",
          imageUrl: "/images/commercial ice machines (2).jpg",
        },
        {
          name: "Food Preparation",
          imageUrl: "/images/food preparation 1.jpg",
        },
        {
          name: "Beverage Equipment",
          imageUrl: "/images/beverage equipment 1.jpg",
        },
        {
          name: "Commercial Work Tables and Station",
          imageUrl: "/images/commercial work tables and station.jpg",
        },
        {
          name: "Dishwashing Equipment",
          imageUrl: "/images/dishwashing equipment.jpg",
        },
        {
          name: "Food Holding and Warming Equipment",
          imageUrl: "/images/food holding and warming equipment.jpg",
        },
      ],
      subLinks: [
        "Commercial Sink",
        "Food Display and Merchandising",
        "Restaurant Faucet and Plumbing",
        "Restaurant Shelving",
        "Kitchenette",
      ],
    },
    {
      name: "Commercial Refrigeration",
      subMenu: [
        {
          name: "Reach-In Refrigerators and Freezers",
          imageUrl:
            "/images/reach-in-refrigerators-and -freezers-1.jpg",
        },
        {
          name: "Prep Refrigeration",
          imageUrl: "/images/prep-refrigeration-2.jpg",
        },
        {
          name: "Bar Refrigerator",
          imageUrl: "/images/bar-refrigerator-4.jpg",
        },
        {
          name: "Merchandising and Display Refrigeration",
          imageUrl:
            "/images/merchandising-display- refrigeration-3.jpg",
        },
        {
          name: "Undercounter Refrigerators",
          imageUrl: "/images/undercounter-refrigerators-5.jpg",
        },
        {
          name: "Worktop Refrigerators",
          imageUrl: "/images/worktop-refrigerators-8.jpg",
        },
        {
          name: "Undercounter Freezer",
          imageUrl: "/images/undercounter-freezer-6.jpg",
        },
        {
          name: "Worktop Freezer",
          imageUrl: "/images/worktop-freezers-7.jpg",
        },
      ],
      subLinks: [
        "Walk-In Refrigeration",
        "Commercial Blast Chillers",
        "Commercial Ice Cream Freezers",
        "Specialty Refrigeration",
        "Refrigeration Parts and Accessories",
      ],
    },
    {
      name: "Smallwares",
      subMenu: [
        {
          name: "Kitchen Cutlery",
          imageUrl: "/images/kitchen20cutlery20120(1).jpg",
        },
        {
          name: "Cookware",
          imageUrl: "/images/cookware201.jpg",
        },
        {
          name: "Food Storage Supplies",
          imageUrl: "/images/food20storage20supplies201.jpg",
        },
        {
          name: "Kitchen Hand Tool",
          imageUrl: "/images/kitchen20hand20tool20(1).jpg",
        },
        {
          name: "Baking Smallware",
          imageUrl: "/images/baking20smallwares.jpg",
        },
        {
          name: "Serving Supplies",
          imageUrl: "/images/serving20supplies201.jpg",
        },
        {
          name: "Kitchen Supplies",
          imageUrl: "/images/kitchen20supplies201.jpg",
        },
        {
          name: "Beverage Supplies",
          imageUrl: "/images/beverage20supplies201.jpg",
        },
      ],
      subLinks: [
        "Chafers, Chafer Accessories and Chafing Dishes",
        "Pizza Tools and Bakeware",
        "Bartending Supplies",
        "Coffee Service Supplies",
        "Healthcare Meal Delivary System",
        "Hotel and Restaurant Linens",
        "Hotel Room Supplies",
        "Restaurant Signs",
        "Salad Bar Equipment and Accessories",
        "Supermarket and Retail Supplies",
      ],
    },
    {
      name: "Storage and Transport",
      subMenu: [
        {
          name: "Carts",
          imageUrl: "/images/carts20120(1).jpg",
        },
        {
          name: "Dinnerware Storage and Transports",
          imageUrl:
            "/images/dinnerware20storage20and20transports20120(2).jpg",
        },
        {
          name: "Ice Transports Buckets and Mobile Ice Bins",
          imageUrl: "/images/ice20transport20buckets20120(1).jpg",
        },
        {
          name: "Industrial Supplies",
          imageUrl: "/images/industrial20supplies201.jpg",
        },
        {
          name: "Insulated Food Carriers and Beverage Dispensers",
          imageUrl:
            "/images/insulated20food20carriers20and20beverage20dispensers201.jpg",
        },
        {
          name: "Delivery Bag Accessories",
          imageUrl: "/images/delivery20bags201.jpg",
        },
        {
          name: "Storage Rack",
          imageUrl: "/images/storage20rack20120(1).jpg",
        },
        {
          name: "Trucks and Dollies",
          imageUrl: "/images/trucks20and20dollies20120(1).jpg",
        },
      ],
    },
    {
      name: "Tabletop",
      subMenu: [
        {
          name: "Dinnerware",
          imageUrl: "/images/dinnerware201.jpg",
        },
        {
          name: "Flatware",
          imageUrl: "/images/flatware201.jpg",
        },
        {
          name: "Beverageware",
          imageUrl: "/images/beverageware201.jpg",
        },
        {
          name: "Condiment Holders and Dispensers",
          imageUrl:
            "/images/condiment20holders20and20dispensers201.jpg",
        },
        {
          name: "Menu Holders and Guest Check Presenters",
          imageUrl:
            "/images/menu20holders20and20guest20check20presenters201.jpg",
        },
        {
          name: "Tabletop Beverage Service",
          imageUrl: "/images/tabletop20beverage20service201.jpg",
        },
        {
          name: "Tabletop Display and Decor",
          imageUrl: "/images/tabletop20display20and20decor201.jpg",
        },
        {
          name: "Asian Restaurant Tabletop Supplies",
          imageUrl: "/images/asian20restaurant20tabletop201.jpg",
        },
      ],
      subLinks: ["Linen and Table Covers"],
    },
    {
      name: "Disposable",
      subMenu: [
        {
          name: "Catering Disposable",
          imageUrl: "/images/catering20disposables.jpg",
        },
        {
          name: "Disposable Bakery Supplies",
          imageUrl: "/images/disposable20bakery20supplies201.jpg",
        },
        {
          name: "Disposable Chopstick",
          imageUrl: "/images/disposable20chopstick201.jpg",
        },
        {
          name: "Disposable Concession Supplies",
          imageUrl:
            "/images/disposable20concession20supplies201.jpg",
        },
        {
          name: "Disposable Food Packaging Supplies",
          imageUrl:
            "/images/disposable20food20packaging20supplies201.jpg",
        },
        {
          name: "Disposable Host and Server Supplies",
          imageUrl:
            "/images/disposable20host20and20server20supplies201.jpg",
        },
        {
          name: "Eco-Friendly Disposable",
          imageUrl: "/images/eco frendly disposibels.webp",
        },
        {
          name: "Food Safety Disposables",
          imageUrl: "/images/food20safety20disposables201.jpg",
        },
      ],
      subLinks: [
        "Paper Disposable",
        "Plastic Disposable",
        "Take-Out Containers",
      ],
    },
    {
      name: "Furniture",
      subMenu: [
        {
          name: "Restaurant Table",
          imageUrl: "/images/restaurant table 1.jpg",
        },
        {
          name: "Restaurant Seating",
          imageUrl: "/images/restaurant seating 1.jpg",
        },
        {
          name: "Commercial Outdoor Furnitures",
          imageUrl: "/images/commercial outdoor furnitures 1.jpg",
        },
        {
          name: "School Furniture",
          imageUrl: "/images/school furniture.jpg",
        },
        {
          name: "Folding Chairs and Tables",
          imageUrl: "/images/folding chairs and table.jpg",
        },
        {
          name: "Commercial Decors",
          imageUrl: "/images/commercial-decors.webp",
        },
        {
          name: "Coat Rack",
          imageUrl: "/images/coat rack 1.jpg",
        },
        {
          name: "Server Station and Host Stand",
          imageUrl: "/images/server-station-and-host-stand.jpg",
        },
      ],
    },
    {
      name: "Janitorial Supply",
      subMenu: [
        {
          name: "Cleaning Chemicals",
          imageUrl: "/images/cleaning20chemicals201.jpg",
        },
        {
          name: "Janitorial Equipment",
          imageUrl: "/images/janitorial-equipment.jpg",
        },
        {
          name: "Recycling Bins and Trash Cans",
          imageUrl: "/images/recycling20and20trash20cans.jpg",
        },
        {
          name: "Laundry/Warehousing",
          imageUrl: "/images/laundry2020warewashing.jpg",
        },
        {
          name: "Facility Maintenance and Sanitation",
          imageUrl:
            "/images/facility20maintenance20and20sanitation.jpg",
        },
        {
          name: "Cleaning Supplies and Tools",
          imageUrl: "/images/cleaning20supplies20and20tools201.jpg",
        },
        {
          name: "Floor Care Supply",
          imageUrl: "/images/floor20care20supplies.jpg",
        },
        {
          name: "Restroom Supply",
          imageUrl: "/images/restroom20supply.jpg",
        },
      ],
      subLinks: [
        "Security and Safety Products",
        "Commercial Floor Mat",
        "First Aid Supply",
        "First Aid Kit",
      ],
    },
  ];

  return (
    <>
      <AppBar position="static" className="wrapper-navbar">
        <Toolbar className="d-flex align-item-center justify-content-between">
          {menus.map((menu, index) => (
            <Link
              key={index}
              to="#"
              className="nav-menu"
              onMouseEnter={() => setActiveMenu(index)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              {menu.name}
            </Link>
          ))}
        </Toolbar>
      </AppBar>

      {activeMenu !== null && (
        <Card
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={() => setActiveMenu(null)}
          className="card"
        >
          <CardHeader className="card-header" title={menus[activeMenu].name} />
          <CardContent className="card-content">
            <Grid2 container spacing={2}>
              {menus[activeMenu].subMenu &&
                menus[activeMenu].subMenu.map((subMenu, index) => {
                  if (menus[activeMenu].subMenu) {
                    return (
                      <Grid2
                        key={index}
                        size={12 / menus[activeMenu].subMenu.length}
                      >
                        <ImageBox
                          component="img"
                          imageSrc={subMenu.imageUrl}
                          title={subMenu.name}
                          linkText={subMenu.name}
                          style={{
                            borderRadius: "5px",
                          }}
                        />
                      </Grid2>
                    );
                  }
                })}
            </Grid2>
            <Container className="wrapper-sublink">
              {menus[activeMenu].subLinks &&
                menus[activeMenu].subLinks.map((subLink, index) => {
                  if (menus[activeMenu].subLinks) {
                    return (
                      <Link
                        to="#"
                        key={index}
                        className="d-flex align-item-center justify-content-between sublink"
                      >
                        <Typography variant="body2" className="sublink-text">
                          {subLink}
                        </Typography>
                        <ArrowNext className="arrow-icon" />
                      </Link>
                    );
                  }
                })}
            </Container>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Navbar;
