import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Goods from "../goods/Goods";
import Customer from "../customer/Customer";
import NotFound from "../not-found/NotFound";
import GoodsDetail from "../goods/GoodsDetail";
import GoodsList from "../goods/GoodsList";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='goods' element={<Goods />} >
            {/* 默认 子路由 ，在页面 路由为 /goods ，会展示该子路由 */}
            <Route index element={<GoodsList />}/>

            <Route path=":id" element={<GoodsDetail />}/>
          </Route>

          <Route path='customer' element={<Customer />} ></Route>
          <Route path="*" element={<NotFound />} /> 
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
