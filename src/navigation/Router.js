import React from "react";
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import { useSelector } from 'react-redux'
import Layouts from "../pages/Layouts";
import Splash from "../pages/Auth/Splash";
import Home from "../pages/Home";
import About from "../pages/About";
import Shop from "../pages/Shop";
import Vendors from "../pages/Vendors";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Compare from "../pages/Compare";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";
import Logins from "../pages/Auth/Logins";
import Register from "../pages/Auth/Register";
import Forgotpassword from "../pages/Auth/Forgotpassword";
import Resetpassword from "../pages/Auth/Resetpassword";

const RequireAuth = () => {
  const token = useSelector((state) => state.auth.token)
  let location = useLocation();
  if (!token) {
    return 
    // <Navigate to="/login" state={{ from: location }} />;
  }
  return <Outlet />;
};

function Routers() {
  return (
    <HashRouter>
      <Routes>

        {/* Without token and Without Layout */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/login" element={<Splash />} /> */}

        <Route element={<Layouts />}>

          {/* Without token */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/logins" element={<Logins />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/resetpassword" element={<Resetpassword />} />

          <Route element={<RequireAuth />}>
            {/* With token */}
            {/* <Route path="/new" element={<Home />} /> */}
          </Route>

        </Route>

      </Routes>
    </HashRouter>
  );
}

export default Routers