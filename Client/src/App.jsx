import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Signup,
  SignupOtp,
  Login,
  ErrorFOF,
  About,
  Contact,
} from "./pages/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup/otp" element={<SignupOtp />} />
          <Route path="/error/404" element={<ErrorFOF />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
