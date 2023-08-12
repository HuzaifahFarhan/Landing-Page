import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComponents from "./HomeComponents";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponents />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
