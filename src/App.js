// src/App.tsx
import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router/routes";

// useRoutes 可以将数组对象形式的路由，直接在页面上使用。

export default function App() {
  const element = useRoutes(routes);
  return <>{element}</>;
}
