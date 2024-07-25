import {
  Header,
  NavBar,
  AboutMainSection,
  SectionOne,
  SectionTwo,
  SectionThree,
  Footer,
} from "../components/index";

import imgS1I1 from "../assets/img/aboutS1I1.svg";
import imgS1I2 from "../assets/img/aboutS1I2.svg";
import imgS1I3 from "../assets/img/aboutS1I3.svg";
import imgS1I4 from "../assets/img/aboutS1I4.svg";

import imgS2I1 from "../assets/img/aboutS2I1.png";
import imgS2I2 from "../assets/img/aboutS2I2.png";
import imgS2I3 from "../assets/img/aboutS2I3.png";

import imgS3I1 from "../assets/img/aboutS3I1.png";
import imgS3I2 from "../assets/img/aboutS3I2.png";
import imgS3I3 from "../assets/img/aboutS3I3.png";

export function About() {
  return (
    <>
      <Header />
      <NavBar />
      <section className=" flex flex-col gap-10 px-6 pt-6 pb-20">
        <AboutMainSection />
        <div className=" m-4 grid grid-cols-1 px-8 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:px-8">
          <SectionOne
            imgData={imgS1I1}
            h1Data="10.5K"
            pData="Sellers active in our site"
          />
          <SectionOne
            imgData={imgS1I2}
            h1Data="33K"
            pData="Monthly Product Sale"
          />
          <SectionOne
            imgData={imgS1I3}
            h1Data="45.5K"
            pData="Customer active in our site"
          />
          <SectionOne
            imgData={imgS1I4}
            h1Data="25K"
            pData="Annual gross sale in our site"
          />
        </div>
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          <SectionTwo
            imgData={imgS2I1}
            h1Data="Tom Cruise"
            pData="Founder & Chairman"
          />
          <SectionTwo
            imgData={imgS2I2}
            h1Data="Emma Watson"
            pData="Managing Director"
          />
          <SectionTwo
            imgData={imgS2I3}
            h1Data="Will Smith"
            pData="Product Designer"
          />
        </div>
        <div className=" grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:px-32 mt-14">
          <SectionThree
            imgData={imgS3I1}
            h1Data="FREE AND FAST DELIVERY"
            pData="Free delivery for all orders over $140"
          />
          <SectionThree
            imgData={imgS3I2}
            h1Data="24/7 CUSTOMER SERVICE"
            pData="Friendly 24/7 customer support"
          />
          <SectionThree
            imgData={imgS3I3}
            h1Data="MONEY BACK GUARANTEE"
            pData="We retrun money within 30 days"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
