import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate, This is not used in the temporary routes
} from "react-router-dom";

import { GlobalStyle } from "@components";
import { Login, SignUp, Home } from "./pages/index";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          {/* These are supposed to be the final routes
          <Route index element={<Login />} />
          <Route path="/Login" element={<Navigate to="/" />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Home" element={<Home />} /> 
          */}
          {/* These are temporary routes until the user auth feature is implemented */}
          <Route index element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
