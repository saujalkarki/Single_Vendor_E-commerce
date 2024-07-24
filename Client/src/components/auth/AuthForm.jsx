import { useNavigate } from "react-router-dom";

import authImg from "../../assets/img/authImg.png";
import googleIcon from "../../assets/img/googleIcon.png";

export function AuthForm({ children, auth, h1Data, buttonData }) {
  const navigate = useNavigate();
  let formData;

  function submitForm(e) {
    e.preventDefault();

    formData = new FormData(e.currentTarget);
    const formDataObj = {};

    formData.forEach((value, key) => {
      formDataObj[key] = value;
    });

    navigate("/signup/otp", { state: { formDataObj: formDataObj } });
  }

  return (
    <>
      <div className=" flex flex-row justify-center md:gap-20 md:justify-normal py-10 ">
        <img
          src={authImg}
          alt="auth Img"
          className=" hidden md:flex md:w-[50%]"
        />
        <div className=" flex flex-col gap-3 md:w-[50%] md:items-center md:justify-center">
          <form
            className="flex flex-col gap-1 md:min-w-[50%]"
            encType="multipart/form-data"
            onSubmit={(e) => {
              submitForm(e);
            }}
          >
            <h1 className=" text-2xl font-semibold">{h1Data}</h1>
            <p className=" text-base font-normal">Enter your details below</p>
            <div className="flex flex-col pt-1 gap-1">{children}</div>
            <button className=" border-none bg-red-500 text-white py-3 rounded-sm cursor-pointer mt-3 text-center">
              {buttonData}
            </button>
          </form>
          {auth === "Signup" ? (
            <div className="flex flex-col gap-3 min-w-[50%]">
              <div className="flex justify-evenly border-2 border-black py-2.5 rounded-sm cursor-pointer">
                <img src={googleIcon} alt="google icon" />
                <span>Sign up with Google</span>
              </div>
              <div className=" flex gap-2 justify-center text-[1.06rem] md:px-6">
                <p>Already have an account?</p>
                <p className=" underline">Log in</p>
              </div>
            </div>
          ) : (
            <p className="text-center text-red-500 cursor-pointer">
              Forgot Password?
            </p>
          )}
        </div>
      </div>
    </>
  );
}
