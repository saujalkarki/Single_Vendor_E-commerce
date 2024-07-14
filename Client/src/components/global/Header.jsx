export function Header() {
  return (
    <>
      <div className="bg-black text-white text-center flex justify-around py-4 px-2 sm:px-0">
        <div className="flex md:text-[1.1rem]">
          <span>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            &nbsp; &nbsp;
          </span>
          <span className="hidden underline cursor-pointer sm:flex">
            Shop Now
          </span>
        </div>
        <select
          lang="en"
          name="lang"
          id="lang"
          className="hidden rounded-md font-semibold focus:outline-none p-1 lg:px-2 text-black md:flex"
        >
          <option value="Eng">English</option>
          <option value="Nep">नेपाली</option>
        </select>
      </div>
    </>
  );
}
