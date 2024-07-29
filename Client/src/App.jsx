import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Signup,
  SignupOtp,
  Login,
  ErrorFOF,
  About,
  Contact,
  Account,
  ProductDetailPage,
} from "./pages/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
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
