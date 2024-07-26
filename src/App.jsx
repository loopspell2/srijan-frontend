import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/home" element={<Home />} />
        
        <Route element={<PrivateRoute />}>
        {/* <Navbar /> */}
          {/* <Route path='/create-listing' element={<CreateListing />} />
          <Route path='/update-listing/:listingId' element={<UpdateListing />} />  */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
