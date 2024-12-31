import { useEffect, useState } from "react";
import LogoActionBar from "./logo-action-bar/logo-action-bar";
import Navbar from "./navbar-header/navbar";
import TopPencilBanner from "./top-pencil-banner/top-pencil-banner";
import StickyHeader from "./sticky-header/sticky-header";

const Header = () => {
  const [showDefaultHeader, setShowDefaultHeader] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup listener
    };
  }, [scrollPosition]);

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > 50) {
      setShowDefaultHeader(true);
    } else {
      setShowDefaultHeader(false);
    }

    setScrollPosition(currentScrollPosition);
  };

  return (
    <>
      {!showDefaultHeader ? (
        <>
          <TopPencilBanner />
          <LogoActionBar />
          <Navbar />
        </>
      ) : (
        <StickyHeader />
      )}
    </>
  );
};

export default Header;
