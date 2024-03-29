import Head from "next/head";
import Layouts from "../components/Layout/Layouts";
import About from "./../components/about";
import HeroSection from "./../components/heroSection";

import Skills from "../components/skills";
import Testimonial from "./../components/testimonial";
import Contacts from "./contacts";

function Home() {
  return (
    <div className="backdrop-blur-2xl ">
      <div className=" ">
        <Head>
          <title>Mehedi Offcial | Home</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <HeroSection></HeroSection>

        <div className="">
          <About></About>
          <Skills ></Skills>
          <Testimonial></Testimonial>
          <Contacts></Contacts>
        </div>
      </div>
    </div>
  );
}
export default Home;

Home.getLayout = function getLayout(page) {
  return <Layouts>{page}</Layouts>;
};
