import React from "react";
import { name, city } from "../data/data.js";

const h1Style = "firebricks"
function Home() {
  // update the JSX being returned!
  return 
  <div id="home">
    <h1 style={h1Style}>{name} is a Web developer from {city}</h1>
  </div>;
  
}

export default Home;
