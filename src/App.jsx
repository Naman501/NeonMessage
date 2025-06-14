
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import './index.css'
import PrivateRoutes from "./components/PrivateRoutes"
import { AuthProvider } from "./Utils/AuthContext"
import Room from "./pages/Room"
import LoginPage from "./pages/LoginPage"

const App = () => {
  return (
   <>
    <div >
      
   <h1 className="chat-heading">Neon Message</h1>

      <Router>
        <AuthProvider >
        <Routes>
          <Route path='/login' element={<LoginPage />} />


          <Route element={<PrivateRoutes />} >
          <Route path='/' element={<Room />} />
          <Route path='/' element={<Room />} />
          <Route path='/' element={<Room />} />
          </Route>
        </Routes>
        </AuthProvider>
      </Router>

      
      </div>
   </>
  )
}

export default App