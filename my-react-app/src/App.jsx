import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Info from "./pages/about/Info";
import Login from "./pages/about/Login";
import Service from "./pages/about/Service";
import NotFound from "./pages/NotFound";
import UserList from "./pages/UserList";
import UserDetail from "./pages/UserDetail";
import EditUser from "./components/EditUser";
import PracticeComponents from "./pages/PracticeComponents";

function App() {
  return (
    <Routes>
      {/* Routes with Navbar (Layout) */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/list" element={<UserList />} />
        <Route path="/user/:id/:name?" element={<UserDetail />} />
        <Route path="/editUser/:id" element={<EditUser />} />
        <Route path="/practice" element={<PracticeComponents />} />
        <Route path="/practice" element={<PracticeComponents />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* About route WITHOUT Navbar, with nested routes */}
      <Route path="/about" element={<About />}>
        <Route index element={<Info />} />
        <Route path="info" element={<Info />} />
        <Route path="login" element={<Login />} />
        <Route path="service" element={<Service />} />
      </Route>
    </Routes>
  )
}

export default App
