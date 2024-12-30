import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/header";
import Breadcrumb from "./components/breadcrumb-section/breadcrumb";
import { Container } from "@mui/material";
import ProductDetails from "./components/product-details/product-details";
import RelatedItems from "./components/related-items/related-items";
import ProductDescription from "./components/product-description/product-description";
import BestSellingProduct from "./components/best-selling-product/best-selling-product";
import Footer from "./components/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container className="product-detail-section">
        <Breadcrumb />
        <ProductDetails />
      </Container>
      <RelatedItems />
      <ProductDescription />
      <BestSellingProduct />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
