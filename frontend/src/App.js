import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";




const App = () => {
  const user = localStorage.getItem('user');
  return (
    <>
      <BrowserRouter>
        <Routes>

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
