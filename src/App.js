import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./components/Login";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/add" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
