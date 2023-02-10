import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import OrganizationInfo from "./OrganizationInfo";

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://riseact.org" target="_blank">
          <img src="/riseact.png" className="logo" alt="Riseact logo" />
        </a>

        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Riseact + React</h1>
      <div className="card">
        <OrganizationInfo />
        <p>
          Take a look to the{" "}
          <a href="http://localhost:3000/graphql">Riseact GraphQL schema</a>{" "}
          from your app.
          <br />
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Powered by <a href="https://vitejs.dev">Vitejs</a>
      </p>
    </div>
  );
}

export default App;
