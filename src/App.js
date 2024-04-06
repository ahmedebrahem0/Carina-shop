import React, { Component } from "react";
import { RouterProvider,createBrowserRouter } from "react-router-dom";
// import About from "About.jsx"
// import Navber from "./Combonent/Navber/Navber.jsx";
import Home from "./Combonent/Home/Home.jsx";
import About from "./Combonent/About/About.jsx";
// import Service from "./Combonent/Service/Service.jsx";
import Footer from "./Combonent/Footer/Footer.jsx";
// import SystemLayout from "./Combonent/Layout/SystemLayout.jsx";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.js";
import Products from './Combonent/Products/Products.jsx';
import Product from './Combonent/Product/Product.jsx';
import Service from './Combonent/Service/Service';
import NotFound from "./NotFound/NotFound.jsx";
import MainLayout from "./Layouts/MainLayout.jsx";
import Games from "./Combonent/Games/Games.jsx";
import Boys from "./Combonent/Boys/Boys.jsx";
import Toys from "./Combonent/Toys/Toys.jsx";
import Pajamas from './Combonent/Pajamas/Pajamas';
// import Pajamas from './Combonent/Pajamas/Pajamas';
import SocksTights from "./Combonent/SocksTights/SocksTights.jsx";
import Panties from './Combonent/Panties/Panties';

export default class App extends Component {
  routers = createBrowserRouter([
    {
      path: "/Carina-shop",
      element: <MainLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "Home", element: <Home /> },
        { path: "About", element: <About /> },
        { path: "Footer", element: <Footer /> },
        { path: "products", element: <Products /> },
        { path: "Product", element: <Product /> },
        { path: "Pajamas", element: <Pajamas /> },
        { path: "Socks", element: <SocksTights /> },
        { path: "Panties", element: <Panties /> },
        {
          path: "Service",
          element: <Service />,
          children: [
            // { index: true, element: <Games /> },
            // { path: "Games", element: <Games/> }, // empty in vav ""
            { path: "Boys", element: <Boys /> },
            { path: "Toys", element: <Toys /> },
          ],
        },
      ],
    },
  ]);

  render() {
    return (
      <div>
        <div>
          <RouterProvider router={this.routers} />
        </div>
      </div>
    );
  }
}
