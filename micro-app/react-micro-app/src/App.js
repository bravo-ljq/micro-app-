import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import React from "react";
import Home from './pages/home/index'
export default function App() {
  return (
    // 👇 设置基础路由，如果没有设置baseroute属性，则window.__MICRO_APP_BASE_ROUTE__为空字符串
    <BrowserRouter basename={window.__MICRO_APP_BASE_ROUTE__ || ''}>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to='/home' />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}