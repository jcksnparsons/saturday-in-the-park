import React from "react";
import NavBar from "./nav/Navbar";
import ApplicationViews from "./ApplicationViews";

const SaturdayInThePark = () => {
  return (
    <div>
      <h1>Welcome to the World-Famous Kennywood Amusement Park!</h1>
      <div>
        <NavBar />
        <ApplicationViews />
      </div>
    </div>
  );
};

export default SaturdayInThePark;
