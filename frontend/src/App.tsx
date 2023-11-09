import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GlobalStyle } from "./components/index";
import { Login } from "./pages/index";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route index element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
