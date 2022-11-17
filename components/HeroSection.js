import Image from "next/image";
import dp from "../public/simple man.jpg";
import Style from "./layout.module.css"

function HeroSection({StyleHeroSec}) {
    return (<>
        <div className="text-stone-900 dark:text-white mt-5 grid grid-cols-2 gap-5 ">
           
            <div className="flex-row-1 mx-auto my-auto items-center text-justify p-4">
                <p className={Style.title}>Hello, MY NAME IS </p>
                <h1 className={Style.name}>Mehedi Hasan Munna</h1>

                <p className={Style}>Web Developer (MERN STACK)</p>
                <p className={Style.description}>I’m a Front End Web developer who is passionate about making error-free websites with 100% client satisfaction. I love to solve real-world problems. I am strategic, and goal-oriented, and always work with an end goal in mind.</p>
                <div> <button className="btn btn-lg no-animation btn-outline">HIRE ME</button> <button className="btn btn-lg">ABOUT ME</button> </div>

            </div>
            <div class="...">
                <Image className="width-full" src={dp} width={500} alt="image"></Image>
            </div>


        </div>
    </>);
}

export default HeroSection;