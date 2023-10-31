import Image from "next/image";
import React from "react";

const SkillCard = ({ src, name, description }) => {
  return (
    <div className=" cursor-pointer max-w-sm w-72 h-80 max-h-40 flex  flex-col justify-center border border-gray-300 p-4 rounded shadow-xl">
      <div className="flex justify-center">
        <Image
          className="rounded-[50%] w-20 h-20 border border-gray-500 "
          width={200}
          height={100}
          alt="icons"
          src={src}></Image>
      </div>

      <div>
        <h2 className="font-bold ">{name}</h2>
        <p className="font-light text-gray-600 ">{description.slice(0, 50)}</p>
      </div>
    </div>
  );
};

export default SkillCard;
