import "./Homepage.css";

import ContentSection from "../Components/Homepage/ContentSection";
import Footer from "../Components/Footer";
import React from "react";
import WelcomePage from "../Components/Homepage/WelcomePage";

export default function Homepage() {
  return (
    <>
      <WelcomePage />
      <ContentSection />
      <Footer />
    </>
  );
}
