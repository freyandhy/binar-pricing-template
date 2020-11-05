import React from 'react';
import TopMenu from "./component/TopMenu";
import Header from "./component/Header";
import PricingBox from "./component/PricingBox";
import Footer from "./component/Footer";
import "./css/pricing.css";

const App = () => {
  return (
    <>
      <TopMenu />
      <Header
        title="Pricing"
        description="Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization."
      />

      <div className="container">
        <PricingBox />
        <Footer />
      </div>
    </>
  );
}
 
export default App;