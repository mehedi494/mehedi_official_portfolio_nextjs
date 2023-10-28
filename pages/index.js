import Head from "next/head";
import About from "./../components/about";
import Footer from "./../components/footer";
import HeroSection from "./../components/heroSection";
import Navbar from "./../components/navbar";
import Service from "./../components/services";
import Testimonial from "./../components/testimonial";

export default function Home() {
  return (
    <div className="w-full   bg-[url('/white-color-background-ghw6e685ri75chj4.jpg')] dark:bg-gray-900 dark:bg-[url('/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product-plain-studio-background.jpg')]  dark:bg-cover">
      <div className="backdrop-blur-2xl  ">
        <Head>
          <title>Mehedi Offcial | Home</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header></header>
        <Navbar></Navbar>
        <HeroSection></HeroSection>

        <main className="">
          <div className="">
            <About></About>
            <Service></Service>
            <Testimonial></Testimonial>
          </div>
        </main>

        <Footer></Footer>
      </div>
    </div>
  );
}
