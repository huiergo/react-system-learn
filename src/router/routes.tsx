// src/router/routes.tsx
import React from "react";
import { RouteObject } from "react-router-dom";
import Home from "../home/Home";
import Goods from "../goods/Goods";
import Customer from "../customer/Customer";
import NotFound from "../not-found/NotFound";
import GoodsDetail from "../goods/GoodsDetail";
import GoodsList from "../goods/GoodsList";

const routes: RouteObject[] = [
  // {
  //   path: "/",
  //   element: <Home />,
  //   children: [
  //     {
  //       path: "/goods",
  //       element: <Goods />,
  //       children: [
  //         { index: true, element: <GoodsList /> },
  //         { path: ":id", element: <GoodsDetail /> }
  //       ]
  //     },
  //     {
  //       path: "/customer",
  //       element: <Customer />,
  //     },
  //     {
  //       path: "*",
  //       element: <NotFound />,
  //     },
  //   ]
  // }
];

// const routes : RouteObject[]=[
//   {
//     path:'/'
//   }
// ]

export default routes;
