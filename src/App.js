import React from "react";
import Favlist from "./components/favlist";
import Studentlist from "./components/studenlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentProvider from "./components/contextprovider";
function App() {
  return (
    <>
    <StudentProvider>
  
      <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<Studentlist />} />
          <Route path="/fav" element={<Favlist />} />
        
        </Routes>
      </BrowserRouter>
      </StudentProvider>
  
    </>
  );
}

export default App;
