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
        <div className=" grid sm:grid-cols-2 lg:grid-cols-5 px-8 md:px-14 py-14 gap-4">
          <FooterLink
            h1Data={"Exclusive"}
            p1Data={"Subscribe"}
            p2Data={"Get 10% off your first order"}
          >
            <div className="flex items-center relative">
              <input
                type="text"
                placeholder="Enter your Email."
                name="footerEmail"
                id="footerEmail"
                className=" bg-black border-2 rounded-sm px-3 py-2 text-lg md:pr-6 md:py-1 md:text-base w-[100%]"
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
            <p className="cursor-pointer">Wishlist</p>
            <p className="cursor-pointer">Shop</p>
          </FooterLink>

          <FooterLink
            h1Data={"Quick Link"}
            p1Data={"Privacy Policy"}
            p2Data={"Terms Of Use"}
            p3Data={"FAQ"}
          >
            <p className="cursor-pointer">Contact</p>
          </FooterLink>

          <FooterLink
            h1Data={"Download App"}
            p1Data={"Save $3 with App. New User Only."}
          >
            <div className=" flex gap-3">
              <img
                src={qrImg}
                alt="qr code"
                className=" w-[4.8rem] cursor-pointer"
              />
              <div className="flex flex-col gap-1">
                <img
                  src={googlePlay}
                  alt="play store"
                  className=" w-28 cursor-pointer"
                />
                <img
                  src={appStore}
                  alt="app store"
                  className=" w-28 cursor-pointer"
                />
              </div>
            </div>
            <div className="flex gap-2 cursor-pointer mt-3">
              <CiFacebook className=" w-8 h-8" />
              <CiTwitter className=" w-8 h-8" />
              <CiInstagram className=" w-8 h-8" />
              <CiLinkedin className=" w-8 h-8" />
            </div>
          </FooterLink>
        </div>
        <div className=" text-center pt-6 pb-6">
          &copy; Copyright Saujal 2024. All rights reserved.
        </div>
      </div>
    </>
  );
}
