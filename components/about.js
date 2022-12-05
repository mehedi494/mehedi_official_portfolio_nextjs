const About = () => {
    return (<div className="pt-2 dark:text-white">
        <h1 className="text-center text-4xl font-semibold font-Josefin">ABOUT ME</h1>
        <h1 className="text-center text-xl font-regular font-poppins">what i will do for you</h1>

        <div className="text-stone-900 dark:text-white mt-5 grid md:grid-cols-1 lg:grid-cols-2
        sm:grid-col-1  gap-5 w-full  h-full px-4 bg-slate-50 dark:bg-inherit ">

            <div className="flex-row   justify-center text-justify p-2 h-80    ">
                <div className="flex justify-center  ">
                    {/* <Image src={js} alt="javaScript" className="w-1/4 rounded-full "></Image> */}
                </div>
                {/* <div className="py-5 ">
                    <h1 className="text-center text-xl font-bold font-Josefin">Java Script</h1>
                    <p className="font-poppins">I will convert your PSD to HTML5 with Latest Bootstrap. It will be fully responsive. Pixel-perfect code and fresh hand code are my power. If you have any design or idea I can make it a website.</p>
                </div> */}


            </div>

            <div className="flex-row rounded-3xl  justify-center text-justify p-2 h-80    ">
                <div className="flex justify-center  ">
                    {/* <Image src={react} alt="javaScript" className="w-1/4 rounded-full "></Image> */}
                </div>
                <div className="py-5">
                    <h1 className="text-center text-xl font-bold font-Josefin">React js</h1>
                    <p className="font-poppins">I will convert your PSD to HTML5 with Latest Bootstrap. It will be fully responsive. Pixel-perfect code and fresh hand code are my power. If you have any design or idea I can make it a website.</p>
                </div>


            </div>


        </div>
    </div>);
    
}
 
export default About;