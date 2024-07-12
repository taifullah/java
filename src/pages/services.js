import React from "react"; 
import {Fade} from "react-awesome-reveal"
import { FaLaptopCode } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { GiArtilleryShell } from "react-icons/gi";
import ReactVisibilitySensor from "react-visibility-sensor";
export default function Services(){
    return(
        <div>
            <div className=" flex justify-center items-center h-screen">
                <ReactVisibilitySensor>
                    <Fade direction="up">
                        <h1 className=" text-5xl font-extrabold">Our Exlusive <span className="text-blue-500">AfridiSolution</span><br></br>services</h1>
                    </Fade>
                </ReactVisibilitySensor>
            </div>
            <div>
                <div className="flex justify-center items-center h-screen ">
                    <ReactVisibilitySensor>
                        <Fade direction="left">
                            <div className="bg-blue-600 text-lg text-white w-60 h-56 rounded-xl flex flex-col items-center transition">
                                <FaLaptopCode />
                                <h1>We have Experts Web developers</h1>
                                <p>Experienced Web Developers Delivering Innovative Solutions</p>
                            </div>
                        </Fade>
                    </ReactVisibilitySensor>
                    <ReactVisibilitySensor>
                        <Fade direction="left">
                            <div className="bg-blue-600 text-lg text-white w-60 h-56 rounded-xl flex flex-col items-center transition">
                                <FaDatabase/>
                                <h1>Databse Analysis</h1>
                                <p>Experienced Web Developers Delivering Innovative Solutions</p>
                            </div>
                        </Fade>
                    </ReactVisibilitySensor>
                    <ReactVisibilitySensor>
                        <Fade direction="left">
                            <div className="bg-blue-600 text-lg text-white w-60 h-56 rounded-xl flex flex-col items-center transition">
                                <FaServer />
                                <h1>server security</h1>
                                <p>Experienced Web Developers Delivering Innovative Solutions</p>
                            </div>
                        </Fade>
                    </ReactVisibilitySensor>
                    <ReactVisibilitySensor>
                        <Fade direction="left">
                            <div className="bg-blue-600 text-lg text-white w-60 h-56 rounded-xl flex flex-col items-center transition ">
                                <GiArtilleryShell />
                                <h1>UX/UI Design</h1>
                                <p>Experienced Web Developers Delivering Innovative Solutions</p>
                            </div>
                        </Fade>
                    </ReactVisibilitySensor>
                </div>
            </div>

            <div className=" flex justify-center items-center h-screen">
                <ReactVisibilitySensor>
                    <Fade direction="up">
                        <h1 className=" text-5xl font-extrabold">Our Exlusive <span className="text-blue-500">AfridiSolution</span><br></br>services</h1>
                    </Fade>
                </ReactVisibilitySensor>
            </div>
            <div>
                <div className="flex justify-center items-center h-screen ">
                    <ReactVisibilitySensor>
                        <Fade direction="up">
                            <div className="bg-blue-600 text-lg text-white w-60 h-56 rounded-xl flex flex-col items-center transition">
                                <FaLaptopCode />
                                <h1>We have Experts Web developers</h1>
                                <p>Experienced Web Developers Delivering Innovative Solutions</p>
                            </div>
                        </Fade>
                    </ReactVisibilitySensor>
                    <ReactVisibilitySensor>
                        <Fade direction="up">
                            <div className="bg-blue-600 text-lg text-white w-60 h-56 rounded-xl flex flex-col items-center transition">
                                <FaDatabase/>
                                <h1>Databse Analysis</h1>
                                <p>Experienced Web Developers Delivering Innovative Solutions</p>
                            </div>
                        </Fade>
                    </ReactVisibilitySensor>
                    <ReactVisibilitySensor>
                        <Fade direction="up">
                            <div className="bg-blue-600 text-lg text-white w-60 h-56 rounded-xl flex flex-col items-center transition">
                                <FaServer />
                                <h1>server security</h1>
                                <p>Experienced Web Developers Delivering Innovative Solutions</p>
                            </div>
                        </Fade>
                    </ReactVisibilitySensor>
                    <ReactVisibilitySensor>
                        <Fade direction="up">
                            <div className="bg-blue-600 text-lg text-white w-60 h-56 rounded-xl flex flex-col items-center transition ">
                                <GiArtilleryShell />
                                <h1>UX/UI Design</h1>
                                <p>Experienced Web Developers Delivering Innovative Solutions</p>
                            </div>
                        </Fade>
                    </ReactVisibilitySensor>
                </div>
            </div>
        </div>
                
            
    )
}