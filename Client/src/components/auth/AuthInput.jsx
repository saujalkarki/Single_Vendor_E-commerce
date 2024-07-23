import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

export function AuthInput({ type, placeHolder, name }) {
  const [seePassword, setSeePassword] = useState(false);

  return (
    <>
      {type === "password" ? (
        <div className=" relative">
          <input
            type={seePassword ? "text " : "password"}
            placeholder={placeHolder}
            name={name}
            id={name}
            className=" placeholder-lg border-b-2 border-black pt-5 pl-1 text-lg focus:outline-none w-[100%]"
          />
          <div
            onClick={() => {
              setSeePassword(!seePassword);
            }}
            className="absolute bottom-[0.70rem] right-1.5 cursor-pointer"
          >
            {seePassword ? <IoEye /> : <IoEyeOff />}
          </div>
        </div>
      ) : (
        <input
          type={type}
          placeholder={placeHolder}
          name={name}
          id={name}
          className=" placeholder-lg border-b-2 border-black pt-5 pl-1 text-lg focus:outline-none"
        />
      )}
    </>
  );
}
