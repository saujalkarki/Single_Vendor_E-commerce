import { Header, NavBar, AuthForm, Footer } from "../components/index";
import { AuthInput } from "../components/index";

export function Login() {
  return (
    <>
      <Header />
      <NavBar />
      <AuthForm auth="Login" h1Data="Login to Exclusive" buttonData="Login">
        <AuthInput
          type="text"
          placeHolder="Email or Phone Number"
          name="userEmail"
        />
        <AuthInput type="password" placeHolder="Password" name="userPassword" />
      </AuthForm>
      <Footer />
    </>
  );
}
