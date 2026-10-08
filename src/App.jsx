import './App.css'
import { Routes, Route } from 'react-router-dom'
import  ForgotPassword  from "./Components/ForgotPassword/ForgotPassword.jsx"
import Login  from "./Components/Login/CommonLoginScreen.jsx"
import PlacementReset from "./Components/PlacementReset/PlacementReset.jsx"
import ResetPassword from "./Components/ResetPassword/ResetPassword.jsx"
import SuccessPage from "./Components/SuccessPage/SuccessPage.jsx"
function App() {
  return (
    <Routes>
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/" element={<Login />} />
      <Route path="/placementReset" element={<PlacementReset />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/SuccessPage" element={<SuccessPage />} />
    </Routes>
  )
}

export default App