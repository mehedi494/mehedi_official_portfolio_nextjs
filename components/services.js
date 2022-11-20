import Image from "next/image";
import js from "../public/js.png"
import react from "../public/react.png"
import redux from "../public/Redux.png"
import node from "../public/nodejs.png"
import mongo from "../public/mongodb.png"
import express from "../public/express.png"

const Service = () => {
    return (<div className="pt-2">
        <h1 className="text-center text-4xl font-semibold font-Josefin">SERVICES</h1>
        <h1 className="text-center text-xl font-regular font-poppins">what i will do for you</h1>
        <div className="text-stone-900 dark:text-white mt-5 grid md:grid-cols-1 lg:grid-cols-3
        sm:grid-col-1  gap-5 w-full  h-full px-4 bg-slate-50 dark:bg-inherit ">

            <div className="flex-row rounded-3xl  justify-center text-justify p-2 h-80 glass   ">
                <div className="flex justify-center  ">
                    <Image src={js} alt="javaScript" className="w-1/4 rounded-full "></Image></div>
                <div className="py-5 ">
                    <h1 className="text-center text-xl font-bold font-Josefin">Java Script</h1>
                    <p className="font-poppins">I will convert your PSD to HTML5 with Latest Bootstrap. It will be fully responsive. Pixel-perfect code and fresh hand code are my power. If you have any design or idea I can make it a website.</p>
               </div>
                

            </div>
            
            <div className="flex-row rounded-3xl  justify-center text-justify p-2 h-80 glass   ">
                <div className="flex justify-center  ">
                    <Image src={react} alt="javaScript" className="w-1/4 rounded-full "></Image></div>
                <div className="py-5">
                    <h1 className="text-center text-xl font-bold font-Josefin">React js</h1>
                    <p className="font-poppins">I will convert your PSD to HTML5 with Latest Bootstrap. It will be fully responsive. Pixel-perfect code and fresh hand code are my power. If you have any design or idea I can make it a website.</p>
                </div>


            </div>

            <div className="flex-row rounded-3xl  justify-center text-justify p-2 h-80 glass   ">
                <div className="flex justify-center  ">
                    <Image src={redux} alt="javaScript" className="w-1/4 rounded-full "></Image></div>
                <div className="py-5">
                    <h1 className="text-center text-xl font-bold font-Josefin">Redux js</h1>
                    <p className="font-poppins">I will convert your PSD to HTML5 with Latest Bootstrap. It will be fully responsive. Pixel-perfect code and fresh hand code are my power. If you have any design or idea I can make it a website.</p>
                </div>


            </div>

            <div className="flex-row rounded-3xl  justify-center text-justify p-2 h-80 glass   ">
                <div className="flex justify-center  ">
                    <Image src={node} alt="javaScript" className="w-1/4 rounded-full "></Image></div>
                <div className="py-5">
                    <h1 className="text-center text-xl font-bold font-Josefin ">Node js</h1>
                <p className="font-poppins">I will convert your PSD to HTML5 with Latest Bootstrap. It will be fully responsive. Pixel-perfect code and fresh hand code are my power. If you have any design or idea I can make it a website.</p>
                </div>


            </div>
            <div className="flex-row rounded-3xl  justify-center text-justify p-2 h-80 glass   ">
                <div className="flex justify-center  ">
                    <Image src={express} alt="javaScript" className="w-1/4 rounded-full "></Image></div>
                <div className="py-5">
                    <h1 className="text-center text-xl font-bold font-Josefin">Epress js</h1>
                    <p className="font-poppins">I will convert your PSD to HTML5 with Latest Bootstrap. It will be fully responsive. Pixel-perfect code and fresh hand code are my power. If you have any design or idea I can make it a website.</p>
                </div>


            </div>
            <div className="flex-row rounded-3xl  justify-center text-justify p-2 h-80 glass   ">
                <div className="flex justify-center  ">
                    <Image src={mongo} alt="javaScript" className="w-1/4 rounded-full "></Image></div>
                <div className="py-5">
                    <h1 className="text-center text-xl font-bold font-Josefin">MongoDB</h1>
                    <p className="font-poppins">I will convert your PSD to HTML5 with Latest Bootstrap. It will be fully responsive. Pixel-perfect code and fresh hand code are my power. If you have any design or idea I can make it a website.</p>
                </div>


            </div>
           


        </div>
    </div>);
}
 
export default Service;