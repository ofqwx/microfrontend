import React, { Suspense } from "react";
import "./App.css";

const Mfe1 = React.lazy(() => import("mfe1/Mfe1"));

function App() {
  return (
    <div className="App">
      <h1>Micro frontends with webpack module federation.</h1>

      <Suspense fallback="Loading mfe1...">
        <Mfe1 />
      </Suspense>
    </div>
  );
}

export default App;
