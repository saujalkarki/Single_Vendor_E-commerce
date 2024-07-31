import { useLocation } from "react-router-dom";
import {
  Header,
  NavBar,
  AuthForm,
  AuthInput,
  Footer,
} from "../../components/index";
import axios from "axios";

export function SignupOtp() {
  let signUpOtpFormData;

  const location = useLocation();
  const { formDataObj } = location.state;

  async function submitForm(e) {
    e.preventDefault();

    console.log(e.currentTarget);

    signUpOtpFormData = new FormData(e.currentTarget);
    const userOtpDataObj = {};

    signUpOtpFormData.forEach((value, key) => {
      userOtpDataObj[key] = value;
    });

    console.log({
      ...formDataObj,
      ...userOtpDataObj,
    });

    await axios.post("http://localhost:3000/user/signup", {
      ...formDataObj,
      ...userOtpDataObj,
    });
  }

  return (
    <>
      <Header />
      <NavBar />
      <AuthForm
        auth="SignupOtp"
        h1Data="Verify Otp"
        buttonData="Submit"
        submitForm={submitForm}
      >
        <AuthInput type="text" placeHolder="Sign up OTP" name="userOtp" />
      </AuthForm>
      <Footer />
    </>
  );
}
