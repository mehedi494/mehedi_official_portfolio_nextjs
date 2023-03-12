import useDownloader from "react-use-downloader";
import Image from "next/image";
import dp from "../public/me-with-shape.png";


function HeroSection({ StyleHeroSec }) {
    const { size, elapsed, percentage, download,
        cancel, error, isInProgress } =
        useDownloader();
    const fileUrl = "/resume-of-mehedi-hasan.pdf";
    const filename = "resume-of-mehedi-hasan.pdf";
    return (<>
        <div className="text-stone-900 dark:text-white mt-5 grid md:grid-cols-2 lg:grid-cols-2
        sm:grid-col-1  gap-5 w-full  h-full ">

            <div className="lg:order-first md:order first sm:order-last flex-row-1 mx-auto my-auto items-center text-justify p-4">

                <p className="font-poppins font-regular text-base " >Hello, MY NAME IS </p>

                <h1 className="sm:sm:text-2xl md:md:text-3xl text-5xl lg:lg:text-4xl font-Josefin  font-bold  ">Mehedi Hasan Munna</h1>

                <p className="font-poppins font-semibold text-2xl sm:text-base">Web Developer (MERN STACK)</p>
                <p className="font-raleway">I m a Front End Web developer who is passionate about making error-free websites with 100% client satisfaction. I love to solve real-world problems. I am strategic, and goal-oriented, and always work with an end goal in mind.</p>
                <div className="mt-5 flex justify-base gap-4">
                    <button className="btn btn-lg no-animation outline-dashed   dark:hover:text-white">HIRE ME</button>

                    <button onClick={() => download(fileUrl, filename)} className="btn btn-lg">download Resume</button>
                </div>

            </div>
            <div class="order-first">
                <Image unoptimized={true} className='w-full' src={dp} width={500} alt="image"></Image>
            </div>


        </div>
    </>);
}

export default HeroSection;