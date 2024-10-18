import { BrowserRouter , Routes,Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import DashBoard from './pages/DashBoard';
import SendMoney from './pages/SendMoney';
import  Layout  from './pages/Layout';
function App() {
  
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp  />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/send" element={<SendMoney />} />
          <Route path={"/" || "/home"} element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
