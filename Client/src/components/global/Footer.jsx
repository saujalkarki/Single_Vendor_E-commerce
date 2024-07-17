import { VscSend } from "react-icons/vsc";
import qrImg from "../../assets/img/qrImg.png";
import googlePlay from "../../assets/img/googlePlay.png";
import appStore from "../../assets/img/appStore.png";
import { CiFacebook, CiTwitter, CiInstagram, CiLinkedin } from "react-icons/ci";
import { FooterLink } from "../index";

export function Footer() {
  return (
    <>
      <div className=" bg-black text-white mt-auto">
        <div className=" grid sm:grid-cols-2 lg:grid-cols-5 px-14 py-14">
          <FooterLink
            h1Data={"Exclusive"}
            p1Data={"Subscribe"}
            p2Data={"Get 10% off your first order"}
          >
            <div className="flex items-center relative">
              <input
                type="text"
                placeholder="Enter your Email."
                className=" bg-black border-2 rounded-sm py-1 pl-1 text-sm w-[100%]"
              />
              <VscSend className=" absolute right-2" />
            </div>
          </FooterLink>

          <FooterLink
            h1Data={"Support"}
            p1Data={"Itahari-4, Sunsari, Nepal"}
            p2Data={"exclusive@gmail.com"}
            p3Data={"+977 9000000000"}
          />

          <FooterLink
            h1Data={"Account"}
            p1Data={"My Account"}
            p2Data={"Login / Register"}
            p3Data={"Cart"}
          >
            <p>Wishlist</p>
            <p>Shop</p>
          </FooterLink>

          <FooterLink
            h1Data={"Quick Link"}
            p1Data={"Privacy Policy"}
            p2Data={"Terms Of Use"}
            p3Data={"FAQ"}
          >
            <p>Contact</p>
          </FooterLink>

          <FooterLink
            h1Data={"Download App"}
            p1Data={"Save $3 with App. New User Only."}
          >
            <div className=" grid grid-cols-2">
              <img src={qrImg} alt="qr code" className=" w-[4.8rem]" />
              <div className="flex flex-col gap-1">
                <img src={googlePlay} alt="play store" className=" w-28" />
                <img src={appStore} alt="app store" className=" w-28" />
              </div>
            </div>
            <div className="flex">
              <CiFacebook />
              <CiTwitter />
              <CiInstagram />
              <CiLinkedin />
            </div>
          </FooterLink>
        </div>
        <div className=" text-center pt-6">
          &copy; Copyright Saujal 2024. All rights reserved.
        </div>
      </div>
    </>
  );
}
