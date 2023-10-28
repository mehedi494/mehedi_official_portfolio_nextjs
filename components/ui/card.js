import Image from "next/image";

import React from "react";

const Card = ({ srcUrl, cartTitle, cardBody, buttonTitle }) => {
  return (
    <div className="card w-96 glass">
      <figure>
        <Image
          width={300}
          height={500}
          className="w-full"
          src={srcUrl}
          alt="car!"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cartTitle}</h2>
        <p>{cardBody}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{buttonTitle}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
