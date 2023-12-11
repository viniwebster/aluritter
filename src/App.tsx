import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import NotFound from './pages/NotFound'
import Home from "./pages/Home"
import { GlobalStyles } from "./styles/GlobalStyles"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"

interface Props {
  children: React.ReactElement
}

const PrivateRoute = ({ children } : Props) => {
  if (!localStorage.getItem("access-token")) {
    return <Navigate to="/signin" />;
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
        <Route path="/signup" element={<PublicRoute><SignUp /></PublicRoute>} />
        <Route path="/signin" element={<PublicRoute><SignIn /></PublicRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
