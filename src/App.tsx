import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "@pages/home";
import { Products } from "@pages/products";
import { Layout } from "@components/layout";
import { Contact } from "@pages/contact";
import { About } from "@pages/about";
import { Login } from "@pages/auth/login";
import { Register } from "@pages/auth/register";
import { UserProfile } from "@pages/userProfile";
import { UserDashbord } from "@pages/userProfile/dashboard";
import { Admin } from "@pages/admin";
import { Customers } from "@components/admin/selected/customers";
import { Catalogo } from "@components/admin/selected/catalogo";
import { Orders } from "@components/admin/selected/orders";
import { Blogs } from "@components/admin/selected/blogs";
import { Enquiries } from "@components/admin/selected/enquiries";
////////////////////////////////////////////////////////////
function App() {
  return (
    <>
      <Routes>
        <Route path="admin/" element={<Admin />}>
          <Route path="customers/" element={<Customers />} />
          <Route path="catalogo/" element={<Catalogo />} />
          <Route path="orders/" element={<Orders />} />
          <Route path="blogs/" element={<Blogs />} />
          <Route path="enquiries/" element={<Enquiries />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route path="register/" element={<Register />} />
          <Route path="login/" element={<Login />} />
          <Route index element={<Home />} />
          <Route path="products/" element={<Products />} />
          <Route path="contact/" element={<Contact />} />
          <Route path="about/" element={<About />} />
          <Route path="userprofile/" element={<UserProfile />}>
            <Route path="dashbord/" element={<UserDashbord />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
