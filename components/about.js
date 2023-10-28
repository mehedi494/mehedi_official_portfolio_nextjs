const About = () => {
    return (<div className="pt-2 pb-2 dark:text-white">
        <h1 className="text-center text-4xl font-semibold font-Josefin">ABOUT ME</h1>
        <h1 className="text-center text-xl font-regular font-poppins">what i will do for you</h1>

        <div className="text-stone-900 dark:text-white mt-5 grid md:grid-cols-1 lg:grid-cols-2
        sm:grid-col-1  gap-5 w-full  h-full px-4  dark:bg-inherit ">

            <div className="flex-row   justify-center text-justify p-2 h-80    ">
                <div className="flex justify-center  ">
                    <iframe className=" w-[560px] h-[315px] sm:w-[360px] sm:h-[315px] " src="https://www.youtube.com/embed/Tn6-PIqc4UM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
                <div className="py-5  overflow-hidden overflow-y-auto h-64" >
                    <h1 className="text-center text-xl font-bold font-Josefin">React js</h1>
                    <p className="font-poppins">A junior MERN stack developer is someone who has recently entered the field of web development and is familiar with the MERN (MongoDB, Express.js, React.js, and Node.js) stack. They have a basic understanding of these technologies and are able to develop simple web applications using them.

                        As a junior MERN stack developer, they may have experience with building REST APIs, integrating third-party APIs, and developing basic CRUD (Create, Read, Update, Delete) operations. They may also be familiar with front-end technologies such as HTML, CSS, and JavaScript, and have some experience with React.js for building interactive user interfaces.

                        While a junior MERN stack developer may not have as much experience as a senior developer, they are eager to learn and improve their skills. They are willing to work in a team and take guidance from their more experienced colleagues. With time and experience, a junior MERN stack developer can become a proficient full-stack developer and contribute to the development of complex web applications.</p>
                </div>


            </div>


        </div>
    </div>);
    
}
 
export default About;