import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { GlobalStyle } from "./components/index";
import { Login } from "./pages/index";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/Login" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
