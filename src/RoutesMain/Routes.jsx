import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Home from "../pages/Home";
import Layout from "../pages/layout";

import { UserProvider } from "../context/Context";
import Product from "../pages/Product";
import NotFound from "../pages/NotFound";
import Teste from "../pages/testes/Teste";
const RouteMain = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/produtos"
          element={
            <Layout>
              <Product />
            </Layout>
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Teste />} />
      </Routes>
    </UserProvider>
  );
};

export default RouteMain;
