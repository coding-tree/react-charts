import React from "react";

import "./App.css";
import Bar from "./components/Bar";
import BarTwo from "./components/Bar-Two";

function App() {
  return (
    <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
      <h1>Bar chart</h1>
      <a href="https://nivo.rocks/bar/">https://nivo.rocks/bar/</a>
      <Bar />
      <h1>Bar 2 chart</h1>
      <a href="https://github.com/jerairrest/react-chartjs-2">
        https://github.com/jerairrest/react-chartjs-2
      </a>
      <BarTwo />
    </div>
  );
}

export default App;
