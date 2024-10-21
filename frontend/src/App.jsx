import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import ProtectedRoute from "@/pages/ProtectedRoute";
import SendMoney from "@/pages/SendMoney";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import DashBoard from "@/pages/DashBoard";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashBoard />} />
          </Route>
          <Route path="/send" element={<SendMoney name="" />} />
          <Route path={"/" || "/home"} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
