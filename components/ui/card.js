import Image from "next/image";
import Link from "next/link";

import React from "react";

const Card = ({
  srcUrl,
  cartTitle,
  cardBody: Tools,
  buttonTitle1,
  buttonTitle2,
  liveLink,
  github,
}) => {
  return (
    <div className="card w-80 glass ">
      <div className="">
        <Image
          width={200}
          height={100}
          className="w-full max-h-[200px] rounded-t-xl"
          src={srcUrl}
          alt="car!"
        />
      </div>
      <div className="card-body">
        <div className="dark:text-white">
        <h2 className="card-title">{cartTitle}</h2>
        <p>
          <i>Technology:</i> {Tools}
        </p>
        </div>
        <div className="card-actions justify-end">
          <Link target="_blak" href={liveLink}>
            {" "}
            <button className="btn btn-outline">{buttonTitle1}</button>
          </Link>
          <Link target="_blak" href={github}>
            <button className="btn ">{buttonTitle2}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
