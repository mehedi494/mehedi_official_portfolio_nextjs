import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const NotFound = () => {
    const router = useRouter()
    useEffect(()=>{
        setTimeout(()=>{
            router.push("/")
        },5000)
    },[router])
  return (
    <div className="flex justify-center items-center align-middle">
      <Image width={500} height={500} alt="404" src={`/5203299.jpg`}></Image>
    </div>
  );
};
<Image fill={true} alt="404" src="/5203299.jpg"></Image>;
export default NotFound;
