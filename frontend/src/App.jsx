import { BrowserRouter , Routes,Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import DashBoard from './components/DashBoard';
import SendMoney from './components/SendMoney';
import  Layout  from './components/Layout';
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
