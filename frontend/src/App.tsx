import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { GlobalStyle } from "./components/index";
import { Login, SignUp, Home } from "./pages/index";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/Login" element={<Navigate to="/" />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
