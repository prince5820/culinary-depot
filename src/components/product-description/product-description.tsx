import {
  Box,
  Container,
  Divider,
  Grid2,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tabs,
  Typography,
} from "@mui/material";
import { useState } from "react";
import "./product-description.css";
import PdfIcon from "../../assets/icons/pdf_icon.svg?react";
import DownloadIcon from "../../assets/icons/download_2_line_icon.svg?react";
import { Link } from "react-router-dom";

const ProductDescription = () => {
  const [tabValue, setTabValue] = useState<number>(0);

  const tableCell1 = [
    "Weight",
    "Height",
    "Width",
    "Depth",
    "Condenser Type",
    "Filter Type",
    "Production per 24 Hour",
    "Refrigerant Type",
    "Refrigeration",
    "Voltage",
    "Width (side - side)",
    "Manufacturer",
    "Amps",
    "CE Certified",
    "Phase",
    "Hertz",
  ];

  const tableCell2 = [
    "155.00 LBS",
    "23.00(H)",
    "30.00(W)",
    "24.00(D)",
    "Air-Cooled",
    "Ice Machines",
    "400 Lbs.",
    "R-404A",
    "Self-Contained",
    "115v",
    '30" - 39" Wide',
    "Scotsman",
    "14.3",
    "YES",
    "1-Ph",
    "60",
  ];

  return (
    <>
      <Box className="wrapper-product-description">
        <Container className="product-description-container">
          <Box
            sx={{
              borderBottom: 1,
              borderTop: 1,
              borderBottomColor: "divider",
              borderTopColor: "divider",
            }}
          >
            <Tabs
              value={tabValue}
              onChange={(_, newVal) => setTabValue(newVal)}
            >
              <Tab label="Product Information"></Tab>
              <Tab label="Product Details" />
              <Tab label="Shipping & Return" />
            </Tabs>
          </Box>
        </Container>
      </Box>
      {tabValue === 0 && (
        <Box className="tab-content-section">
          <Container className="tab-content-container">
            <Box className="content">
              <Grid2 container spacing={1}>
                <Grid2 size={7}>
                  <Typography variant="h5" className="heading">
                    Scotsman C0330MA-1 Product Description
                  </Typography>
                  <Typography variant="body1" className="text">
                    The Scotsman C0330MA-1 Prodigy Plus Modular Cube Ice Machine
                    allows your foodservice operation to be cost-efficient. With
                    its self-monitoring function, this cube ice machine is
                    easier to maintain than ever and helps you save money. This
                    machine re-imagines ice-making unlike no other with its
                    plethora of intuitive technology. This air-cooled ice maker
                    has the ability to produce up to 400 pounds of medium cube
                    ice every day providing much-needed productivity to your
                    foodservice facility. It requires connection to a circuit
                    with a minimum running load of 14.3 amps and electrical
                    specifications of 115 volts, 60 hertz, and a single-phase
                    electrical supply.
                  </Typography>
                  <Typography variant="h5" className="heading-2">
                    Medium-sized Cube Ice Production
                  </Typography>
                  <Typography variant="body1" className="text">
                    This ice maker produces up to 400 pounds of medium-sized
                    cube ice with dimensions of 7/8-inch on all sides. This is
                    based on a 24-hour volume production at an air temperature
                    of 70 degrees Fahrenheit and water temperature of 50 degrees
                    Fahrenheit.
                  </Typography>
                  <Typography variant="h5" className="heading-2">
                    Air Cooled Self-Contained Condensing Unit
                  </Typography>
                  <Typography variant="body1" className="text">
                    For better efficiency at a lower cost, the ice machine is
                    built with an air-cooled, self-contained condenser unit with
                    a front-located air filter. It uses R-404A for refrigerant
                    which generates 5,200 BTU per hour.
                  </Typography>
                  <Typography variant="h5" className="heading-2">
                    Harvest Assist Function
                  </Typography>
                  <Typography variant="body1" className="text">
                    As part of the Prodigy Plus series, this ice maker prides
                    itself on being the world's only self-monitoring cube ice
                    maker. It features the patented Harvest Assist function,
                    which moves the cube ice straight to the storage bin after
                    production.
                  </Typography>
                  <Typography variant="h5" className="heading-2">
                    Easy to Clean and Maintain
                  </Typography>
                  <Typography variant="body1" className="text">
                    It has a self-aligning front panel to access key components
                    for easy cleaning. Antimicrobial protection helps guard
                    internal surfaces between cleanings. A one-touch cleaning
                    function with patented WaterSense purge control reduces
                    scale buildup.
                  </Typography>
                  <Typography variant="h5" className="heading-2">
                    Smart-Board Advanced Feature
                  </Typography>
                  <Typography variant="body1" className="text">
                    A Smart-Board™ advanced feature module is available for
                    additional diagnostic capabilities.
                  </Typography>
                  <Typography variant="h5" className="heading-2">
                    Optional Vari-Smart Ice Level Control
                  </Typography>
                  <Typography variant="body1" className="text">
                    An optional Vari-Smart ice level control may be installed to
                    allow you to customize ice levels.
                  </Typography>
                  <Typography variant="h5" className="heading-2">
                    AutoAlert Indicator Lights
                  </Typography>
                  <Typography variant="body1" className="text">
                    Intuitive technology such as AutoAlert indicator lights is
                    helpful in providing better visibility.
                  </Typography>
                  <Typography variant="h5" className="heading-2">
                    Durable Construction
                  </Typography>
                  <Typography variant="body1" className="text">
                    This ice machine features an all-stainless steel exterior
                    for a durable and presentable unit.
                  </Typography>
                  <Typography variant="h5" className="heading-2">
                    Small Footprint
                  </Typography>
                  <Typography variant="body1" className="text">
                    This 155-pound ice machine unit's operational footprint is
                    among the industry's smallest. It has an overall height of
                    30 inches, a width of 24 inches, and a depth of 23 inches.
                  </Typography>
                  <Typography variant="h5" className="heading-2">
                    Industry-exclusive QR Code
                  </Typography>
                  <Typography variant="body1" className="text">
                    A unit-specific QR code allows you to access the service
                    manuals, cleaning guides, and warranty history if you need
                    information related to the ice machine or want to check on
                    its warranty status whenever and wherever you want.
                  </Typography>
                </Grid2>
                <Grid2 size={5}>
                  <Typography variant="h5" className="heading">
                    Scotsman MC0330MA-1 Specs
                  </Typography>
                  <TableContainer>
                    <Table sx={{ backgroundColor: "#fff" }}>
                      <TableBody>
                        {tableCell1.map((val, index) => (
                          <TableRow
                            sx={{ border: "2px solid #ddd" }}
                            key={index}
                          >
                            <TableCell
                              sx={{
                                border: "2px solid #ddd",
                                padding: "10px 5px 10px 10px",
                                fontSize: "15px",
                                fontWeight: 500,
                              }}
                            >
                              {val}
                            </TableCell>
                            <TableCell
                              sx={{
                                border: "2px solid #ddd",
                                padding: "10px 5px 10px 10px",
                                fontSize: "15px",
                                fontWeight: 400,
                                color: "#444",
                              }}
                            >
                              {tableCell2[index]}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      margin: "34px 0 24px",
                    }}
                  >
                    Resources and Downloads for Scotsman MC0330MA-1
                  </Typography>
                  <Link to="#" className="pdf-link">
                    <Box
                      sx={{
                        height: "113px",
                        backgroundColor: "#fff",
                        padding: "4px 8px",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        borderRadius: "5px",
                        transition: "box-shadow 0.3s ease-in-out", // Smooth transition effect
                        "&:hover": {
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
                        },
                      }}
                      className="d-flex align-item-center"
                    >
                      <PdfIcon
                        style={{
                          height: "61.6px",
                          width: "61.6px",
                        }}
                      />
                      <Box className="d-flex align-item-center justify-content-between">
                        <Typography
                          variant="caption"
                          sx={{ fontSize: "9px", fontWeight: "600" }}
                        >
                          Specsheet
                        </Typography>
                        <DownloadIcon
                          style={{
                            height: "15px",
                            width: "15px",
                            marginLeft: "20px",
                          }}
                        />
                      </Box>
                    </Box>
                  </Link>
                  <Link to="#" className="pdf-link">
                    <Box
                      sx={{
                        height: "113px",
                        backgroundColor: "#fff",
                        padding: "4px 8px",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        borderRadius: "5px",
                        transition: "box-shadow 0.3s ease-in-out", // Smooth transition effect
                        "&:hover": {
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
                        },
                      }}
                      className="d-flex align-item-center"
                    >
                      <PdfIcon
                        style={{
                          height: "61.6px",
                          width: "61.6px",
                        }}
                      />
                      <Box className="d-flex align-item-center justify-content-between">
                        <Typography
                          variant="caption"
                          sx={{ fontSize: "9px", fontWeight: "600" }}
                        >
                          Warranty
                        </Typography>
                        <DownloadIcon
                          style={{
                            height: "15px",
                            width: "15px",
                            marginLeft: "20px",
                          }}
                        />
                      </Box>
                    </Box>
                  </Link>
                  <Link to="#" className="pdf-link">
                    <Box
                      sx={{
                        height: "113px",
                        backgroundColor: "#fff",
                        padding: "4px 8px",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        borderRadius: "5px",
                        transition: "box-shadow 0.3s ease-in-out", // Smooth transition effect
                        "&:hover": {
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
                        },
                      }}
                      className="d-flex align-item-center"
                    >
                      <PdfIcon
                        style={{
                          height: "61.6px",
                          width: "61.6px",
                        }}
                      />
                      <Box className="d-flex align-item-center justify-content-between">
                        <Typography
                          variant="caption"
                          sx={{ fontSize: "9px", fontWeight: "600" }}
                        >
                          Manual
                        </Typography>
                        <DownloadIcon
                          style={{
                            height: "15px",
                            width: "15px",
                            marginLeft: "20px",
                          }}
                        />
                      </Box>
                    </Box>
                  </Link>
                </Grid2>
              </Grid2>
              <Divider sx={{ margin: "60px 0 20px 0" }} />
              <Box
                component="img"
                src="/public/images/NSF Listed.webp"
                alt="NSF Listed"
                sx={{ marginRight: "10px" }}
              />
              <Box
                component="img"
                src="/public/images/UL US.webp"
                alt="UL US"
              />
            </Box>
          </Container>
        </Box>
      )}
      {tabValue === 1 && (
        <Box className="tab-content-section">
          <Container className="tab-content-container">
            <Box className="content">
              <Grid2 container spacing={1}>
                <Grid2 size={7}>
                  <Typography
                    variant="h5"
                    sx={{
                      margin: "0 0 9px 2px",
                      color: "#d1093f",
                      fontWeight: "700",
                      fontSize: "18px",
                      lineHeight: "23px",
                      letterSpacing: "0.4px",
                    }}
                  >
                    Delivery Details
                  </Typography>
                  <Typography variant="body1" className="text">
                    <div>
                      • Upon receiving your Scotsman C0330MA-1 Cube Ice Machine,
                      carefully inspect it for shipping damages. If any damages
                      are found, immediately make a claim about it with the
                      freight carrier and have the product marked as “damaged”
                      on their copy of the freight bill.
                    </div>
                    <div>
                      • Lift and transport the machine to its location with two
                      or more people. Use of a lift gate is required if a
                      loading dock is not available.
                    </div>
                    <div>
                      • Choose a location away from heat producing appliances
                      and heating ducts. Also, place the machine over a level
                      surface.
                    </div>
                    <div>
                      • Provide 12 to 18 inches of spaces at the sides and top
                      for good air flow. Also, allow at least 6 inches of
                      clearance at the sides and back for service and
                      maintenance access.
                    </div>
                  </Typography>
                  <Typography variant="h5" className="heading-2">
                    Maintenance Guide
                  </Typography>
                  <Typography variant="body1" className="text">
                    Three types of maintenance are required to keep the Scotsman
                    C0330MA-1 Cube Ice Machine working in its best condition.
                    First is the regular removal of mineral scale buildup from
                    the machine’s water system and sensors. Second is the
                    sanitization of water system and the ice storage bin at
                    least twice a year. Lastly, the third maintenance procedure
                    required is the regular replacement of air filter and
                    cleaning of the air-cooled condenser unit.
                  </Typography>
                  <Typography variant="h5" className="heading-2">
                    Cleaning Instructions
                  </Typography>
                  <Typography variant="body1" className="text">
                    A soft cloth moistened with warm water and mild soap
                    solution should be enough to clean the stainless-steel
                    surfaces of the C 0330MA-1 Cube Ice Machine. To remove
                    fingerprints, dust, and grease however, you may need to use
                    a quality stainless-steel cleaner. On the other hand, the
                    interior parts of the machine require more sophisticated
                    cleaning methods. For detailed instructions on how to clean
                    the ice storage bin, water systems, and air condenser unit,
                    kindly refer to the manufacturer's manual.
                  </Typography>
                  <Typography variant="h5" className="heading-2">
                    Additional Info
                  </Typography>
                  <Typography variant="body1" className="text">
                    The Scotsman C0330MA-1 Cube Ice Machine holds the following
                    certifications: CE listed, cULus listed, NSF listed, NAFEM
                    Data Protocol compliant, AHRI certified, and ISO 9001:2015
                    certified. It is designed, engineered, and assembled in the
                    U.S.A.
                  </Typography>
                </Grid2>
                <Grid2 size={5}>
                  <Typography variant="h5" className="heading">
                    Scotsman MC0330MA-1 Specs
                  </Typography>
                  <TableContainer>
                    <Table sx={{ backgroundColor: "#fff" }}>
                      <TableBody>
                        {tableCell1.map((val, index) => (
                          <TableRow
                            sx={{ border: "2px solid #ddd" }}
                            key={index}
                          >
                            <TableCell
                              sx={{
                                border: "2px solid #ddd",
                                padding: "10px 5px 10px 10px",
                                fontSize: "15px",
                                fontWeight: 500,
                              }}
                            >
                              {val}
                            </TableCell>
                            <TableCell
                              sx={{
                                border: "2px solid #ddd",
                                padding: "10px 5px 10px 10px",
                                fontSize: "15px",
                                fontWeight: 400,
                                color: "#444",
                              }}
                            >
                              {tableCell2[index]}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      margin: "34px 0 24px",
                    }}
                  >
                    Resources and Downloads for Scotsman MC0330MA-1
                  </Typography>
                  <Link to="#" className="pdf-link">
                    <Box
                      sx={{
                        height: "113px",
                        backgroundColor: "#fff",
                        padding: "4px 8px",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        borderRadius: "5px",
                        transition: "box-shadow 0.3s ease-in-out", // Smooth transition effect
                        "&:hover": {
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
                        },
                      }}
                      className="d-flex align-item-center"
                    >
                      <PdfIcon
                        style={{
                          height: "61.6px",
                          width: "61.6px",
                        }}
                      />
                      <Box className="d-flex align-item-center justify-content-between">
                        <Typography
                          variant="caption"
                          sx={{ fontSize: "9px", fontWeight: "600" }}
                        >
                          Specsheet
                        </Typography>
                        <DownloadIcon
                          style={{
                            height: "15px",
                            width: "15px",
                            marginLeft: "20px",
                          }}
                        />
                      </Box>
                    </Box>
                  </Link>
                  <Link to="#" className="pdf-link">
                    <Box
                      sx={{
                        height: "113px",
                        backgroundColor: "#fff",
                        padding: "4px 8px",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        borderRadius: "5px",
                        transition: "box-shadow 0.3s ease-in-out", // Smooth transition effect
                        "&:hover": {
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
                        },
                      }}
                      className="d-flex align-item-center"
                    >
                      <PdfIcon
                        style={{
                          height: "61.6px",
                          width: "61.6px",
                        }}
                      />
                      <Box className="d-flex align-item-center justify-content-between">
                        <Typography
                          variant="caption"
                          sx={{ fontSize: "9px", fontWeight: "600" }}
                        >
                          Warranty
                        </Typography>
                        <DownloadIcon
                          style={{
                            height: "15px",
                            width: "15px",
                            marginLeft: "20px",
                          }}
                        />
                      </Box>
                    </Box>
                  </Link>
                  <Link to="#" className="pdf-link">
                    <Box
                      sx={{
                        height: "113px",
                        backgroundColor: "#fff",
                        padding: "4px 8px",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        borderRadius: "5px",
                        transition: "box-shadow 0.3s ease-in-out", // Smooth transition effect
                        "&:hover": {
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
                        },
                      }}
                      className="d-flex align-item-center"
                    >
                      <PdfIcon
                        style={{
                          height: "61.6px",
                          width: "61.6px",
                        }}
                      />
                      <Box className="d-flex align-item-center justify-content-between">
                        <Typography
                          variant="caption"
                          sx={{ fontSize: "9px", fontWeight: "600" }}
                        >
                          Manual
                        </Typography>
                        <DownloadIcon
                          style={{
                            height: "15px",
                            width: "15px",
                            marginLeft: "20px",
                          }}
                        />
                      </Box>
                    </Box>
                  </Link>
                </Grid2>
              </Grid2>
              <Divider sx={{ margin: "60px 0 20px 0" }} />
              <Box
                component="img"
                src="/public/images/NSF Listed.webp"
                alt="NSF Listed"
                sx={{ marginRight: "10px" }}
              />
              <Box
                component="img"
                src="/public/images/UL US.webp"
                alt="UL US"
              />
            </Box>
          </Container>
        </Box>
      )}
      {tabValue === 2 && (
        <Box className="tab-content-section">
          <Container className="tab-content-container">
            <Box className="content">
              <Grid2 container spacing={1}>
                <Grid2 size={7}>
                  <Typography variant="body1" className="text">
                    Most orders are shipped within 1 to 5 business days with the
                    exception of custom or special order items. Please call us
                    for exact lead times on items you are purchasing to
                    guarantee delivery. Culinary Depot ships with all national
                    carriers and based on the items you purchase, Culinary Depot
                    will choose the method of delivery that will be cost
                    efficient and most effective. If there is an unexpected
                    delay in shipping or processing your order, we will notify
                    the customer. For orders with multiple items, they may be
                    delivered at different times.
                  </Typography>
                  <Typography variant="h5" className="heading-2">
                    Changing Your Shipping Address
                  </Typography>
                  <Typography variant="body1" className="text">
                    Please contact us immediately if you would like to ship your
                    order to a different address than you indicated at checkout.
                    Once an order ships, there are fees associated with changing
                    the shipping address that would need to be collected before
                    the change can take effect. The cost of changing the
                    shipping address will depend on the shipping method and
                    number of shipments. If an order has already left our
                    warehouse before the shipping address change is made, we
                    cannot guarantee that it will arrive at the new location. If
                    a carrier tries to deliver a shipment several times and is
                    unsuccessful, your order will be returned to us and treated
                    as a standard return.
                  </Typography>
                  <Link to="#" className="read-more">
                    Read More
                  </Link>
                </Grid2>
                <Grid2 size={5}>
                  <Typography variant="h5" className="heading">
                    Scotsman MC0330MA-1 Specs
                  </Typography>
                  <TableContainer>
                    <Table sx={{ backgroundColor: "#fff" }}>
                      <TableBody>
                        {tableCell1.map((val, index) => (
                          <TableRow
                            sx={{ border: "2px solid #ddd" }}
                            key={index}
                          >
                            <TableCell
                              sx={{
                                border: "2px solid #ddd",
                                padding: "10px 5px 10px 10px",
                                fontSize: "15px",
                                fontWeight: 500,
                              }}
                            >
                              {val}
                            </TableCell>
                            <TableCell
                              sx={{
                                border: "2px solid #ddd",
                                padding: "10px 5px 10px 10px",
                                fontSize: "15px",
                                fontWeight: 400,
                                color: "#444",
                              }}
                            >
                              {tableCell2[index]}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      margin: "34px 0 24px",
                    }}
                  >
                    Resources and Downloads for Scotsman MC0330MA-1
                  </Typography>
                  <Link to="#" className="pdf-link">
                    <Box
                      sx={{
                        height: "113px",
                        backgroundColor: "#fff",
                        padding: "4px 8px",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        borderRadius: "5px",
                        transition: "box-shadow 0.3s ease-in-out", // Smooth transition effect
                        "&:hover": {
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
                        },
                      }}
                      className="d-flex align-item-center"
                    >
                      <PdfIcon
                        style={{
                          height: "61.6px",
                          width: "61.6px",
                        }}
                      />
                      <Box className="d-flex align-item-center justify-content-between">
                        <Typography
                          variant="caption"
                          sx={{ fontSize: "9px", fontWeight: "600" }}
                        >
                          Specsheet
                        </Typography>
                        <DownloadIcon
                          style={{
                            height: "15px",
                            width: "15px",
                            marginLeft: "20px",
                          }}
                        />
                      </Box>
                    </Box>
                  </Link>
                  <Link to="#" className="pdf-link">
                    <Box
                      sx={{
                        height: "113px",
                        backgroundColor: "#fff",
                        padding: "4px 8px",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        borderRadius: "5px",
                        transition: "box-shadow 0.3s ease-in-out", // Smooth transition effect
                        "&:hover": {
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
                        },
                      }}
                      className="d-flex align-item-center"
                    >
                      <PdfIcon
                        style={{
                          height: "61.6px",
                          width: "61.6px",
                        }}
                      />
                      <Box className="d-flex align-item-center justify-content-between">
                        <Typography
                          variant="caption"
                          sx={{ fontSize: "9px", fontWeight: "600" }}
                        >
                          Warranty
                        </Typography>
                        <DownloadIcon
                          style={{
                            height: "15px",
                            width: "15px",
                            marginLeft: "20px",
                          }}
                        />
                      </Box>
                    </Box>
                  </Link>
                  <Link to="#" className="pdf-link">
                    <Box
                      sx={{
                        height: "113px",
                        backgroundColor: "#fff",
                        padding: "4px 8px",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        borderRadius: "5px",
                        transition: "box-shadow 0.3s ease-in-out", // Smooth transition effect
                        "&:hover": {
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
                        },
                      }}
                      className="d-flex align-item-center"
                    >
                      <PdfIcon
                        style={{
                          height: "61.6px",
                          width: "61.6px",
                        }}
                      />
                      <Box className="d-flex align-item-center justify-content-between">
                        <Typography
                          variant="caption"
                          sx={{ fontSize: "9px", fontWeight: "600" }}
                        >
                          Manual
                        </Typography>
                        <DownloadIcon
                          style={{
                            height: "15px",
                            width: "15px",
                            marginLeft: "20px",
                          }}
                        />
                      </Box>
                    </Box>
                  </Link>
                </Grid2>
              </Grid2>
              <Divider sx={{ margin: "60px 0 20px 0" }} />
              <Box
                component="img"
                src="/public/images/NSF Listed.webp"
                alt="NSF Listed"
                sx={{ marginRight: "10px" }}
              />
              <Box
                component="img"
                src="/public/images/UL US.webp"
                alt="UL US"
              />
            </Box>
          </Container>
        </Box>
      )}
    </>
  );
};

export default ProductDescription;
