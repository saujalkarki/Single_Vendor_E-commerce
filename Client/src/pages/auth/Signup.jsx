import {
  Header,
  NavBar,
  AuthForm,
  AuthInput,
  Footer,
} from "../../components/index";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Signup() {
  const navigate = useNavigate();

  let formData;

  async function submitForm(e) {
    e.preventDefault();

    formData = new FormData(e.currentTarget);
    const formDataObj = {};

    formData.forEach((value, key) => {
      formDataObj[key] = value;
    });

    await axios.post("http://localhost:3000/user/signup/otp", {
      userContactNumber: formDataObj.userContactNumber,
    });

    navigate("/signup/otp", { state: { formDataObj: formDataObj } });
  }
  return (
    <>
      <Header />
      <NavBar />
      <AuthForm
        auth="Signup"
        h1Data="Create an Account"
        buttonData="Create Account"
        submitForm={submitForm}
      >
        <AuthInput type="text" placeHolder="First Name" name="userFirstName" />
        <AuthInput type="text" placeHolder="Last Name" name="userLastName" />
        <AuthInput type="email" placeHolder="Email" name="userEmail" />
        <AuthInput type="password" placeHolder="Password" name="userPassword" />
        <AuthInput
          type="text"
          placeHolder="Phone Number"
          name="userContactNumber"
        />
        <input
          type="file"
          name="userProfilePhoto"
          id="userProfilePhoto"
          className=" pt-2"
          required
        />
      </AuthForm>
      <Footer />
    </>
  );
}
