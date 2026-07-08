import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Work from "./pages/Work";

import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
     <ThemeProvider>
    <BrowserRouter>
      <Routes>

        {/* Shared Header Layout */}

        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />

          <Route path="/work" element={<Work />} />

        </Route>

      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;