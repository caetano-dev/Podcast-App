import React from "react";
import logoPrime from "./assets/logoPrime.svg";

import "./App.css";
const App = () => {
  console.log(window.innerWidth);
  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <img
            src={logoPrime}
            style={{
              //first check is for desktops then tablets then phones
              height:
                window.innerWidth > 1024
                  ? "12vw"
                  : window.innerWidth > 425
                  ? "20vw"
                  : "28vw",
            }}
            alt="logo"
          />
          <p style={{ fontSize: 20, width: "90vw" }}>
            If you're reading this ReflexStudios.ca & corresponding apps are
            still under construction, Bet you thought this was over lol
          </p>
          <p style={{ fontSize: 20, marginTop: -5, width: "90vw" }}>
            Link up another time, we'll have something for you{" "}
            <span role="img" aria-label="wink">
              😉
            </span>
          </p>
        </div>
      </header>
    </div>
  );
};

export default App;
