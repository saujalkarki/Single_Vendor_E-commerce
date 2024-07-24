import { useLocation } from "react-router-dom";
import {
  Header,
  NavBar,
  AuthForm,
  AuthInput,
  Footer,
} from "../../components/index";

export function SignupOtp() {
  // const location = useLocation();
  // const { formDataObj } = location.state;
  // console.log(formDataObj.userFirstName);
  // console.log(formDataObj.userLastName);
  // console.log((formDataObj.otp = 236));

  return (
    <>
      <Header />
      <NavBar />
      <AuthForm auth="SignupOtp" h1Data="Verify Otp" buttonData="Submit">
        <AuthInput type="text" placeHolder="Sign up OTP" name="useOtp" />
      </AuthForm>
      <Footer />
    </>
  );
}
