import React from "react";
import Common from './Common';
import web from "../src/image/e.jpg";
const  Home=()=> {
  return (
    <>
      <Common
        name="Grow your skills with us"
        imgsrc={web}
        visit='/service'
        btname="Get Started"
      />
    </>
  );
};

export default Home;
