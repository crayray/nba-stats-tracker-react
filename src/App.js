import React from "react";
import "./App.css";
import Team from "./Team";
import Favorites from "./Favorites";

function App() {
  return (
    <div className="App">
      <header>
        NBA Teams
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
      </header>

      <div class="ui placeholder segment">
        <div class="ui two column very relaxed stackable grid">
          <div class="column">
            <Team />
          </div>
        </div>
      </div>
      <div class="middle aligned column">
        <Favorites />
      </div>

      <div class="ui vertical divider"></div>
    </div>
  );
}

export default App;
