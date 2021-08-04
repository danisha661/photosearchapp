import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import SearchPhoto from "./component/SearchPhoto";

const App = () => {
  return (
    <div style={{marginTop:'50px'}}>
        <h1 style={{ textAlign: "center" }}>Snap Shot</h1>
        <p style={{ textAlign: "center" }}>
          A Photo Search App using React JS | Ant Design | Unsplash API Technology
        </p>

        <div style={{ textAlign: "center", width: "100%" }}>
          <SearchPhoto />
        </div>
    </div>
  );
};

export default App;
