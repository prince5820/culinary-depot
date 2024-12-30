import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import "./breadcrumb.css";

const Breadcrumb = () => {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{ textAlign: "center" }}
      className="wrapper-breadcrumbs d-flex align-item-center justify-content-center"
    >
      <Link to="#">Home</Link>
      <Link to="#"> Restaurant Equipment</Link>
      <Link to="#">Commercial Ice Equipment and Supplies</Link>
      <Link to="#">Ice Machines</Link>
      <Link to="#">Air Cooled Ice Machines</Link>
      <Link to="#">
        Scotsman MC0330MA-1 400 Lbs. Prodigy ELITE Air Cooled Cube Style Ice
        Maker - 115 Volts
      </Link>
    </Breadcrumbs>
  );
};

export default Breadcrumb;
