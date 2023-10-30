import Link from "next/link";
import nextIcon from "../public/icon/next.png";
import logowhite from "../public/logowhite.png";
import style from "../styles/Footer.module.css";

import Image from "next/image";

const year = new Date().getFullYear();
const Footer = () => {
  const option = [
    "about",
    " contacts",
    "showcase",
    " Blogs",
    "FAQ",
    "location",
  ];
  const tools = [
    {
      tools: "React.js",
      url: "https://www.reactjs.org/",
    },
    {
      tools: "Next.js",
      url: "https://www.nextjs.com/",
    },
    {
      tools: "Express.js",
      url: "https://www.express.com/",
    },
  ];
  const tools2 = [
    {
      tools: "JavaScript",
      url: "https://www.javascript.com/",
    },
    {
      tools: "TypeScript",
      url: "https://www.typescriptlang.org/",
    },
    {
      tools: "MongoDB",
      url: "https://www.mongodb.com/",
    },

    {
      tools: "Postgres",
      url: "https://www.postgres.com/",
    },
    // {

    // "TypeScript",
    // "MongDB",
    // "Postgres",
  ];
  return (
    <>
      <div className={style.bgImg}>
        <div className="flex flex-col-3 px-8 py-4  items-center text-white ">
          {/* <p className="font-poppins">MERN STACK (MongoDb Express React Node ) </p> */}

          <div className=" flex flex-col mb-3 items-center  ml-2">
            <h1
              title="MEHEDI HASAN MUNNA"
              className="  text-4xl font-bold  text-stone-900   dark:text-white">
              <span className="text-rose-400 ">
                <Image
                  className="inline "
                  src={logowhite}
                  title="logo"
                  alt="Logo"
                  width={50}
                  height={50}
                />
                ehedi hasan{" "}
              </span>
            </h1>
            <ul>
              {option.map((item, index) => (
                <li key={index} className="text-rose-400 hover:transition-all">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className=" text-center flex flex-col mx-auto ">
            <code className="text-4xl text-green-400 font-bold">
              MERN STACK ENGINEER
            </code>
            <div className="flex flex-col-2 justify-around ">
              <ul>
                {tools.map((items, index) => (
                 <Link href={items.url} target="_blank" key={index}>
                  <li
                    
                    className="text-white hover:text-gray-200 cursor-pointer hover:transition-all">
                    {items.tools}
                  </li></Link>
                ))}
              </ul>
              <ul>
                {tools2.map((items, index) => (
                  <Link href={items.url} target="_blank" key={index}>
                    <li className="text-white hover:text-gray-200 cursor-pointer hover:transition-all">
                      {items.tools}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Link href="" title="send icons">
              <button className="btn btn-wide btn-success">
                Contact
                <Image src={nextIcon} alt="contact"></Image>
              </button>
            </Link>
          </div>
        </div>
        <p className="text-center text-gray-400">
        ©️ {year} All right reserve Developer- Mehedi Hasan Munna
        </p>
      </div>
    </>
  );
};

export default Footer;
