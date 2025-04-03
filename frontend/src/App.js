import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";




const App = () => {
  const user = localStorage.getItem('user');
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
