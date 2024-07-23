import { Header, NavBar, AuthForm, Footer } from "../components/index";
import { AuthInput } from "../components/index";

export function Signup() {
  return (
    <>
      <Header />
      <NavBar />
      <AuthForm
        auth="Signup"
        h1Data="Create an Account"
        buttonData="Create Account"
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
        />
      </AuthForm>
      <Footer />
    </>
  );
}
