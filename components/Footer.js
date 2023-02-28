
import style from "../styles/Footer.module.css"
import Link from 'next/link'
import nextIcon from "../public/icon/next.png"
import logowhite from "../public/logowhite.png"

import Image from "next/image";
const Footer = () => {
    return (
        <>
            <div className={style.bgImg} >

                <div className="flex flex-col mx-auto my-auto  justify-items-center text-white text-center">

                    <p className="font-poppins">MERN STACK (MongoDb Express React Node ) </p>

                    <div className="mb-3">  <h1 title="MEHEDI HASAN MUNNA" className="ml-0  text-4xl font-bold inline text-stone-900   dark:text-white"> <span className="text-lime-500 "><Image className="ml-5 inline " src={logowhite} title="logo" alt="Logo" width={50} height={50} />ehedi hasan </span></h1></div>

                    <div className="text-center flex mx-auto w-1/2" >
                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quam corporis,
                            blanditiis, aspernatur atque cum dolore

                        </p>
                    </div>


                    <div> 
                        <Link href="" title="send icons">
                            <button className="btn btn-wide btn-success">Contact 
                                <Image src={nextIcon} alt="contact"></Image>
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Footer;



