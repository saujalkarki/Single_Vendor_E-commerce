import {
  Header,
  NavBar,
  AuthForm,
  AuthInput,
  Footer,
} from "../../components/index";

export function Login() {
  return (
    <>
      <Header />
      <NavBar />
      <AuthForm
        auth="Login"
        h1Data="Login to Exclusive"
        buttonData="Login"
        linkData="Forgot Password?"
      >
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
