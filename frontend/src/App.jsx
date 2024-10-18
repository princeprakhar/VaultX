import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import ProtectedRoute from './pages/ProtectedRoute';
import SendMoney from './pages/SendMoney';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
function App() {
  
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp  />} />
          <Route path="/signin" element={<SignIn />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/send" element={<SendMoney />} />
          <Route path={"/" || "/home"} element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
