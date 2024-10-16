import { BrowserRouter , Routes,Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
function App() {
  
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp  />} />
          <Route path="/signin" element={<SignIn />} />
          {/* <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/send" element={<SendMoney />} /> */}
        </Routes>
      </BrowserRouter>
        
    </div>
  )
}

export default App
