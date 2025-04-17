import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import ProtectedRoute from "@/pages/ProtectedRoute";
import SendMoney from "@/pages/SendMoney";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import DashBoard from "@/pages/DashBoard";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashBoard />} />
          </Route>
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

