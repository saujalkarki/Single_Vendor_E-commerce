import { VscSend } from "react-icons/vsc";
import qrImg from "../../assets/img/qrImg.png";
import googlePlay from "../../assets/img/googlePlay.png";
import appStore from "../../assets/img/appStore.png";

export function Footer() {
  return (
    <>
      <div className=" bg-black text-white">
        <div className=" grid lg:grid-cols-5">
          <div className="">
            <h1>Exclusive</h1>
            <h3>Subscribe</h3>
            <p>Get 10% off your first order</p>
            <div className="flex items-center relative">
              <input
                type="text"
                placeholder="Enter your Email."
                className=" bg-black border-2 rounded-sm py-1 pl-1 text-sm w-[100%]"
              />
              <VscSend className=" absolute right-2" />
            </div>
          </div>
          <div>
            <h1>Support</h1>
            <h3>Itahari-4, Halgada. Sunsari Nepal</h3>
            <p>exclusive@gmail.com</p>
            <p> +977 9000000000</p>
          </div>
          <div>
            <h1>Account</h1>
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>
          <div>
            <h1>Quick Link</h1>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
          <div>
            <h1>Download App</h1>
            <p>Save $3 with App. New User Only.</p>
            <div className=" grid grid-cols-2">
              <img src={qrImg} alt="qr code" className=" w-[4.8rem]" />
              <div className="flex flex-col gap-1">
                <img src={googlePlay} alt="play store" className=" w-28" />
                <img src={appStore} alt="app store" className=" w-28" />
              </div>
            </div>
          </div>
        </div>
        <div className=" text-center">
          &copy; Copyright Saujal 2024. All rights reserved.
        </div>
      </div>
    </>
  );
}
