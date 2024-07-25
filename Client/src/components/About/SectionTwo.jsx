import { FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

export function SectionTwo({ imgData, h1Data, pData }) {
  return (
    <>
      <div className=" flex flex-col gap-2 px-4 sm:px-8">
        <img src={imgData} alt="person's image" />
        <h1 className=" text-2xl font-medium">{h1Data}</h1>
        <p className=" text-lg">{pData}</p>
        <div className=" flex flex-row gap-2">
          <FiTwitter />
          <FiInstagram />
          <FiLinkedin />
        </div>
      </div>
    </>
  );
}
