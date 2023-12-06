import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from './pages/NotFound'
import Home from "./pages/Home"
import { GlobalStyles } from "./styles/GlobalStyles"
import SingUp from "./pages/SingUp"
import SingIn from "./pages/SingIn"

function App() {
  return (
    <BrowserRouter>
    <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/singin" element={<SingIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
