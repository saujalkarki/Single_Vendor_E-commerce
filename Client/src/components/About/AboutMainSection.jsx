import aboutSideImg from "../../assets/img/aboutSideImg.png";

export function AboutMainSection() {
  return (
    <>
      <div className=" flex flex-col lg:flex-row gap-2 items-center">
        <div className=" flex flex-col gap-3 p-4 lg:p-12 xl:p-28">
          <h1 className=" text-3xl font-bold">Our Story</h1>
          <p className=" flex flex-col gap-2 text-lg text-justify">
            <span>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </span>
            <span>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </span>
          </p>
        </div>
        <img src={aboutSideImg} alt="side img" className="" />
      </div>
    </>
  );
}
