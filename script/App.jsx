import React from 'react';
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />}>
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
