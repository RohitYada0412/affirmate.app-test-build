// App.js

import React, { Suspense, } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";


import "./styles/utility.css";
import PublicRoutes from "./routes/public";
import PublicLayout from "./layouts/public";


function App() {
  return (
    <BrowserRouter basename={'/offer'}>
      <Suspense fallback={<div>Loading...</div>}>
        {
          <Routes>
            <Route path="/" element={<PublicLayout />}>
              <Route path="/" element={<Navigate to={`/skylife`} />} />
              {PublicRoutes.map((route, i) => (
                <Route
                  key={i}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
              <Route path="*" element={<Navigate to={`/skylife`} />} />
            </Route>
          </Routes>
        }
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
