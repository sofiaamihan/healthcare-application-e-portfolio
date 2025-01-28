import React, { lazy } from 'react';
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom";

const About = lazy(() => import('./screens/About.jsx'));
const Progress = lazy(() => import('./screens/Progress.jsx'));
const Prototype = lazy(() => import('./screens/Prototype.jsx'));
const Summary = lazy(() => import('./screens/Summary.jsx'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />}>
        <Route path="about" element={<About />} />
        <Route path="progress" element={<Progress />} />
        <Route path="prototype" element={<Prototype />} />
        <Route path="summary" element={<Summary />} />
    </Route>
  )
);

function BaseLayout() {
  return (
      <div>
        <h1>the base layout is working</h1>
      </div>
  );
}

const App  = () => {
    return (
          <RouterProvider router={router} />
    );
};

export default App;
