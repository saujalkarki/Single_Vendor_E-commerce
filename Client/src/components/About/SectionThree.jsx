export function SectionThree({ imgData, h1Data, pData }) {
  return (
    <>
      <div className=" flex flex-col gap-2 items-center text-center">
        <img src={imgData} alt="section img" className=" w-16" />
        <h2 className=" text-lg font-bold">{h1Data}</h2>
        <p className=" font-medium">{pData}</p>
      </div>
    </>
  );
}
