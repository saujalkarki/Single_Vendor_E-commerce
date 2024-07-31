import {
  Header,
  NavBar,
  AuthForm,
  AuthInput,
  Footer,
} from "../../components/index";

export function ForgotPassword() {
  return (
    <>
      <Header />
      <NavBar />
      <AuthForm auth="SignupOtp" h1Data="Verify Otp" buttonData="Submit">
        <AuthInput
          type="text"
          placeHolder="forgot password OTP"
          name="userOtp"
        />
      </AuthForm>
      <Footer />
    </>
  );
}
