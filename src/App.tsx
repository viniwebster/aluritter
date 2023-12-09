import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import NotFound from './pages/NotFound'
import Home from "./pages/Home"
import { GlobalStyles } from "./styles/GlobalStyles"
import SingUp from "./pages/SingUp"
import SingIn from "./pages/SingIn"

interface Props {
  children: React.ReactElement
}

const PrivateRoute = ({ children } : Props) => {
  if (!localStorage.getItem("access-token")) {
    return <Navigate to="/singin" />;
  }
  return children;
};

const PublicRoute = ({ children } : Props) => {
  if (localStorage.getItem("access-token")) {
    return <Navigate to="/" />;
  }
  return children;
};

function App() {
  return (
    <BrowserRouter>
    <GlobalStyles />
      <Routes>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/singup" element={<PublicRoute><SingUp /></PublicRoute>} />
        <Route path="/singin" element={<PublicRoute><SingIn /></PublicRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
