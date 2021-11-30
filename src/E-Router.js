import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import A from "./A";
import B from "./B";
export default function Router() {
  return (
    <BrowserRouter>
      {/* 使用 Routes 替换曾经的 Switch */}
      <Routes>
        <Route path="/" element={<A />} />
        <Route path="/detail" element={<B />} />
      </Routes>
    </BrowserRouter>
  );
}
